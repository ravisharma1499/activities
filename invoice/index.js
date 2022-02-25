let currency_rates = new Map();
currency_rates.set("GBP", 1);
currency_rates.set("INR", 101.43);
currency_rates.set("USD", 1.36);
currency_rates.set("EUR", 1.2);

// initiate indexedDB
let db; // global variable
if (!window.indexedDB) {
	console.log("Database not supported");
}
let request = window.indexedDB.open("invoice_db", 1);
request.onerror = function (event) {
	alert("Error opening database");
};
request.onsuccess = function (event) {
	db = request.result;
	console.log("Success:" + db);
};
request.onupgradeneeded = function (event) {
	db = event.target.result;
	let objectStore = db.createObjectStore("invoice", {
		keyPath: "invoice_number",
	});
	objectStore.createIndex("invoice_number", "invoice_number", {
		unique: true,
	});
	objectStore.createIndex("invoice_date", "invoice_date", {
		unique: false,
	});
	objectStore.createIndex("invoice_due_date", "invoice_due_date", {
		unique: false,
	});
	objectStore.createIndex("purchase_order_number", "purchase_order_number", {
		unique: false,
	});
	objectStore.transaction.oncomplete = function (event) {
		console.log("Database created");
	};
};

function addInvoiceDB(
	invoice_number,
	invoice_date,
	invoice_due_date,
	purchase_order_number
) {
	let transaction = db.transaction(["invoice"], "readwrite");
	transaction.oncomplete = function (event) {
		console.log("Transaction completed");
	};
	transaction.onerror = function (event) {
		console.log("Transaction not completed");
	};
	let new_invoice = [
		{
			invoice_number: invoice_number,
			invoice_date: invoice_date,
			invoice_due_date: invoice_due_date,
			purchase_order_number: purchase_order_number,
		},
	];
	let objectStore = transaction.objectStore("invoice");
	let request = objectStore.add(new_invoice);
	request.onsuccess = function (event) {
		console.log("Invoice added");
	};
}

function readInvoice(invoice_number) {
	let invoice = {};
	let transaction = db.transaction(["invoice"], "readonly");
	transaction.oncomplete = function (event) {
		console.log("Transaction completed");
	};
	transaction.onerror = function (event) {
		console.log("Transaction not completed");
	};
	let objectStore = transaction.objectStore("invoice");
	let request = objectStore.get(invoice_number);
	request.onsuccess = function (event) {
		console.log(request.result);
		invoice = request.result;
		console.log(invoice);
	};
	return invoice;
}

function updateInvoice(
	invoice_number,
	invoice_date,
	invoice_due_date,
	purchase_order_number
) {
	let transaction = db.transaction(["invoice"], "readwrite");
	transaction.oncomplete = function (event) {
		console.log("Transaction completed");
	};
	transaction.onerror = function (event) {
		console.log("Transaction not completed");
	};
	let objectStore = transaction.objectStore("invoice");
	let request = objectStore.get(invoice_number);
	request.onsuccess = function (event) {
		let invoice = request.result;
		invoice.invoice_date = invoice_date;
		invoice.invoice_due_date = invoice_due_date;
		invoice.purchase_order_number = purchase_order_number;
		let request = objectStore.put(invoice);
		request.onsuccess = function (event) {
			console.log("Invoice updated");
		};
	};
}

function createOrUpdateInvoice() {
	let invoice_number = $("#invoice-no").val();
	let invoice_date = $("#invoice-date").val();
	let invoice_due_date = $("#invoice-due").val();
	let purchase_order_number = $("#purchase-order-number").val();
	if (readInvoice(invoice_number) != undefined) {
		updateInvoice(
			invoice_number,
			invoice_date,
			invoice_due_date,
			purchase_order_number
		);
	} else {
		addInvoiceDB(
			invoice_number,
			invoice_date,
			invoice_due_date,
			purchase_order_number
		);
	}
}

// load values from browser storage on page load
$(document).ready(function () {
	$("#currency").val(sessionStorage.getItem("currency"));
	changeCurrency($("#currency"));
	$("#invoice-no").val(localStorage.getItem("invoice_number"));
	if (document.cookie.length > 0) {
		let cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i].split("=");
			if (cookie[0].trim() == "language") {
				$("#language").val(cookie[1]);
			}
		}
	}
});

// store invoice number in local storage
function storeInvoiceNumber(element) {
	localStorage.setItem("invoice_number", element.value);
}

// store selected language in local storage
function storeLanguage(element) {
	document.cookie = `language=${element.value};expires=Thu, 18 Dec 2025 12:00:00 UTC;`;
}

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
	sessionStorage.setItem("currency", currency);
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

// using indexedDB to save the invoice details
function saveInvoice() {
	// get the invoice details
	let invoice_number = $("#invoice-no").val();
	let invoice_date = $("#invoice-date").val();
	let invoice_due_date = $("#invoice-due").val();
	let purchase_order_number = $("#purchase-order-number").val();

	if (
		invoice_number == "" ||
		invoice_date == "" ||
		invoice_due_date == "" ||
		purchase_order_number == ""
	) {
		return;
	} else {
	}
}
