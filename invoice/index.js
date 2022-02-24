let currency_rates = new Map();
currency_rates.set("GBP", 1);
currency_rates.set("INR", 101.43);
currency_rates.set("USD", 1.36);
currency_rates.set("EUR", 1.2);

// Update the subsequent total fields
function updateTotal() {
	var subTotal = 0;
	$(".item-total").each(function () {
		subTotal += parseFloat($(this).val());
	});
	$("#sub-total").text(parseInt(subTotal.toFixed(2)));
	$("#vat").text((subTotal * 0.2).toFixed(2));
	$("#total").text((subTotal * 1.2).toFixed(2));
	$("#total-due-amount").text((subTotal * 1.2).toFixed(2));
}

// update the total value for each item in the list
function calculateElementTotal(element) {
	console.log($(element).parent().parent().find(".item-total").val());
	$(element)
		.parent()
		.parent()
		.find(".item-total")
		.val(
			$(element).parent().parent().find(".item-quantity").val() *
				$(element).parent().parent().find(".item-rate").val()
		);
	updateTotal();
}

// copy to clipboard from textarea
function copyToClipboard(element) {
	var textToCopy = $(element)
		.parent()
		.parent()
		.parent()
		.find(".items-list")
		.val();
	navigator.clipboard.writeText(textToCopy).then(function () {
		console.log("Copied to clipboard");
	});
}

// change the currency
function changeCurrency(element) {
	var currency = $(element).val();
	$(".items-list").each(function () {
		$(".item-total-currency").text(currency);
	});
	$("#total-currency").text(`Total ${currency}`);
	$("#total-due-currency").text(`${currency}`);
	if (currency_rates.has(currency)) {
		$(".item-rate").each(function () {
			$(this).val(
				($(this).val() * currency_rates.get(currency)) /
					currency_rates.get("GBP")
			);
		});
		$(".item-total").each(function () {
			$(this).val(
				($(this).val() * currency_rates.get(currency)) /
					currency_rates.get("GBP")
			);
		});
		updateTotal();
	}
}

// Add a new row to the invoice list
function appendElement() {
	$("#items-list").append(
		`<div class="row m-2" id="row-0">
			<div class="col-5 p-1 position-relative">
				<button
					type="button"
					class="btn-close position-absolute top-0 bg-danger rounded-circle start-0 translate-middle opacity-100"
					onclick="deleteElement(this)"
					aria-label="Close"
				></button>
				<textarea
					class="form-control rounded-0 rounded-top border border-secondary"
					id="items-list-1"
					rows="3"
					style="resize: none"
				></textarea>
				<div
					class="btn-toolbar"
					role="toolbar"
					aria-label="Toolbar with button groups"
				>
					<div
						class="btn-group me-2 w-50"
						role="group"
						aria-label="First group"
					>
						<button
							type="button"
							class="btn btn-light rounded-0 rounded-bottom border border-secondary"
							id="items-list-copy-1"
							onclick="copyToClipboard(this)"
						>
							<i class="bi bi-clipboard"></i>
						</button>
						<button
							type="button"
							class="btn btn-light rounded-0 rounded-bottom border border-secondary"
							onclick="deleteElement(this)"
						>
							<i class="bi bi-calendar"></i>
						</button>
						<button
							type="button"
							class="btn btn-light rounded-0 rounded-bottom border border-secondary"
						>
							<i class="bi bi-link-45deg"></i>
						</button>
						<button
							type="button"
							class="btn btn-light rounded-0 rounded-bottom border border-secondary"
						>
							<i class="bi bi-tag"></i>
						</button>
					</div>
					<div
						class="btn-group ms-auto"
						style="width: 35%"
						role="group"
						aria-label="Second group"
					>
						<button
							type="button"
							class="btn btn-light rounded-0 rounded-bottom border border-secondary"
						>
							<i class="bi bi-receipt"></i>
						</button>
						<button
							type="button"
							class="btn btn-light rounded-0 rounded-bottom border border-secondary"
						>
							<i class="bi bi-cart2"></i>
						</button>
						<button
							type="button"
							class="btn btn-light rounded-0 rounded-bottom border border-secondary"
						>
							<i class="bi bi-archive"></i>
						</button>
					</div>
				</div>
			</div>
			<div class="col-2 p-1">
				<input
					type="text"
					class="form-control item-quantity"
					onchange="calculateElementTotal(this)"
					id="quantity-list-1"
				/>
			</div>
			<div class="col-2 p-1">
				<input
					type="text"
					class="form-control item-rate"
					onchange="calculateElementTotal(this)"
					id="rate-list-1"
				/>
				<select
					class="form-select form-select-sm w-75 mt-1 ms-auto"
					aria-label="Default select example"
				>
					<option value="pc">pc</option>
				</select>
			</div>
			<div class="col-3 p-1">
				<div class="input-group mb-auto">
					<span
						class="input-group-text bg-white border-end-0"
						id="item-total-currency-list-1"
						>GBP</span
					>
					<input
						type="text"
						class="form-control border-start-0 item-total"
						id="item-total-list-1"
						aria-describedby="basic-addon3"
					/>
				</div>
			</div>
		</div>`
	);
}

// delete a row from the invoice list
function deleteElement(element) {
	$(element).parent().parent().remove();
	updateTotal();
}
