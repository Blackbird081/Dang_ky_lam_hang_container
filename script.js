// --- 1. STATE & CONFIG ---
const i18n = {
    appTitle: { vi: 'Đăng ký dịch vụ', en: 'Service Registration' },
    developedBy: { vi: 'Phát triển bởi: Tiền/Cảng Tân Thuận', en: 'Developed by: Tien/Tan Thuan Port' },
    manageServices: { vi: 'Quản lý Dịch vụ', en: 'Manage Services' },
    history: { vi: 'Lịch sử đăng ký', en: 'Registration History' },
    formTitle: { vi: 'Thông tin chung', en: 'General Information' },
    registrationNo: { vi: 'Số đăng ký', en: 'Registration No.' },
    registrationDate: { vi: 'Ngày đăng ký', en: 'Registration Date' },
    workingDate: { vi: 'Ngày làm hàng', en: 'Working Date' },
    cargoType: { vi: 'Hàng hóa', en: 'Cargo Type' },
    containerType: { vi: 'Loại cont', en: 'Container Type' },
    customerName: { vi: 'Tên khách hàng', en: 'Customer Name' },
    address: { vi: 'Địa chỉ', en: 'Address' },
    phone: { vi: 'Điện thoại', en: 'Phone' },
    notes: { vi: 'Ghi chú', en: 'Notes' },
    thService: { vi: 'Phương án', en: 'Service' },
    thSizeType: { vi: 'Size', en: 'Size' },
    thQty: { vi: 'Số lượng', en: 'Quantity' },
    addRow: { vi: '+ Thêm dòng', en: '+ Add Row' },
    actionsTitle: { vi: 'Xem trước', en: 'Preview' },
    newRegistration: { vi: 'Tạo mới', en: 'New' },
    saveRegistration: { vi: 'Lưu đăng ký', en: 'Save Registration' },
    updatePreview: { vi: 'Cập nhật', en: 'Update Preview' },
    printPdf: { vi: 'In / Xuất PDF', en: 'Print / Export PDF' },
    previewPlaceholder: { vi: 'Bản xem trước (A4)', en: 'A4 preview' },
    modalProductTitle: { vi: 'Quản lý Dịch vụ (Phương án)', en: 'Manage Services (Tariff)' },
    importExcel: { vi: 'Import Excel', en: 'Import Excel' },
    exportExcel: { vi: 'Export Excel', en: 'Export Excel' },
    modalHistoryTitle: { vi: 'Lịch sử Đăng ký Dịch vụ', en: 'Service Registration History' },
    exportHistory: { vi: 'Xuất Lịch sử ra Excel', en: 'Export History to Excel' },
    modalName: { vi: 'Tên Dịch vụ', en: 'Service Name' },
    modalUnit: { vi: 'Đơn vị tính', en: 'Unit' },
    btnModalSave: { vi: 'Lưu', en: 'Save' },
    btnCancel: { vi: 'Hủy', en: 'Cancel' },
    action: { vi: 'Hành động', en: 'Action' },
    date: { vi: 'Ngày ĐK', en: 'Reg. Date' },
    customer: { vi: 'Khách hàng', en: 'Customer' },
    view: { vi: 'Xem', en: 'View' },
    delete: { vi: 'Xóa', en: 'Delete' },
    selectOption: { vi: '-- Chọn dịch vụ --', en: '-- Select a service --' },
    cargoTypes: {
        vi: ['Phân bón', 'Vải cuộn', 'Nông sản', 'Pallet Hạt nhựa', 'Gạch', 'Tôn cuộn', 'Cao su', 'Sứ vệ sinh'],
        en: ['Fertilizer', 'Fabric Rolls', 'Agricultural Products', 'Plastic Resin Pallets', 'Bricks', 'Steel Coils', 'Rubber', 'Ceramic Sanitary Ware']
    },
    otherCargo: { vi: 'Loại hàng khác...', en: 'Other...' },
    toastReady: { vi: 'Sẵn sàng tạo phiếu đăng ký', en: 'Ready to create registration' },
    toastNewRegistration: { vi: 'Đã tạo phiếu đăng ký mới', en: 'New registration created' },
    toastSaveSuccess: { vi: 'Đã lưu đăng ký cho "{name}"!', en: 'Registration saved for "{name}"!' },
    toastLoadSuccess: { vi: 'Đã tải đăng ký của "{name}".', en: 'Loaded registration for "{name}".' },
    toastDeleteSuccess: { vi: 'Đã xóa phiếu đăng ký.', en: 'Registration deleted.' },
    toastTariffUpdated: { vi: 'Danh sách dịch vụ đã được cập nhật.', en: 'Service list has been updated.' },
    toastExportSuccess: { vi: 'Đã xuất file Excel thành công!', en: 'Excel file exported successfully!' },
    toastError: { vi: 'Có lỗi xảy ra. Vui lòng thử lại.', en: 'An error occurred. Please try again.' },
    toastImportNoData: { vi: 'Không tìm thấy dữ liệu trong file Excel.', en: 'No data found in the Excel file.'},
    confirmImport: { vi: 'Tìm thấy {count} dịch vụ. Bạn có muốn thay thế danh sách hiện tại?', en: 'Found {count} services. Do you want to replace the current list?' },
    pdf: {
        title: { vi: 'ĐĂNG KÝ DỊCH VỤ', en: 'SERVICE REGISTRATION' },
        registrationNo: { vi: 'Số', en: ' No.' },
        date: { vi: 'Ngày', en: 'Date' },
        workingDate: { vi: 'Ngày làm hàng', en: 'Working Date' },
        cargoType: { vi: 'Hàng hóa', en: 'Cargo' },
        containerType: { vi: 'Loại cont', en: 'Cont. Type' },
        customerName: { vi: 'Tên khách hàng', en: 'Customer Name' },
        companyName: { vi: 'TTĐH KHAI THÁC TÂN THUẬN', en: 'TAN THUAN OPERATIONS CENTER' },
        companyAddress: { vi: 'Địa chỉ: 18B Lưu Trọng Lư, P. Tân Thuận, TP. HCM', en: 'Address: 18B Luu Trong Lu, Tan Thuan Ward, HCMC' },
        phone: { vi: 'Điện thoại', en: 'Phone' },
        email: { vi: 'Email', en: 'Email' },
        address: { vi: 'Địa chỉ', en: 'Address' },
        notes: { vi: 'Ghi chú', en: 'Notes' },
        thNo: { vi: 'STT', en: 'No.' },
        thService: { vi: 'Phương án', en: 'Service' },
        thSize: { vi: 'Size', en: 'Size' },
        thUnit: { vi: 'ĐVT', en: 'Unit' },
        thQty: { vi: 'SL', en: 'QTY' },
        quoteNotesTitle: { vi: 'Lưu ý:', en: 'Notes:' },
        quoteNotesContent: { 
        vi: `<li style="margin-bottom: 4px;">Chúng tôi ghi nhận theo thông tin khách hàng cung cấp, vui lòng kiểm tra lại phương án.</li><li style="margin-bottom: 4px;">Đối với phương án đóng/rút/sang container, chúng tôi không chịu trách nhiệm việc tháo gỡ, chằng buộc hàng hoá, cũng như các hư hỏng bên trong container như xước, gãy ván sàn...</li><li>Nếu hàng hoá thực tế khác thông tin ban đầu hoặc ngoài khả năng đáp ứng của thiết bị tại Cảng. Phương án làm hàng sẽ được điều chỉnh theo hiện trường.</li>`,
        en: `<li style="margin-bottom: 4px;">We record the information based on the details provided by the customer; please review the handling plan carefully.</li><li style="margin-bottom: 4px;">For stuffing/unstuffing services, we are not responsible for lashing/unlashing or securing/unsecuring cargo, nor for any internal container damages such as scratches, broken floorboards, etc.</li><li>If the actual cargo differs from the initial information or exceeds the handling capacity of the Port’s equipment, the cargo handling plan will be adjusted according to on-site conditions.</li>`
    }
    }
};

const state = {
    currentLang: localStorage.getItem('appLang') || 'vi',
    products: [],
};

// --- 2. DOM ELEMENTS ---
const elements = {
    langToggleBtn: document.getElementById('lang-toggle-btn'),
    appTitle: document.getElementById('app-title'),
    developedByLine: document.getElementById('developed-by-line'),
    tableBody: document.querySelector('#items-table tbody'),
    addRowBtn: document.getElementById('add-row-btn'),
    registrationNumber: document.getElementById('registration-number'),
    registrationDate: document.getElementById('registration-date'),
    customerName: document.getElementById('customer-name'),
    customerAddress: document.getElementById('customer-address'),
    customerPhone: document.getElementById('customer-phone'),
    workingDate: document.getElementById('working-date'),
    cargoTypeSelect: document.getElementById('cargo-type-select'),
    cargoTypeOther: document.getElementById('cargo-type-other'),
    containerType: document.getElementById('container-type'),
    customerNotes: document.getElementById('customer-notes'),
    renderPreviewBtn: document.getElementById('render-preview-btn'),
    generatePdfBtn: document.getElementById('generate-pdf-btn'),
    newBtn: document.getElementById('new-btn'),
    saveBtn: document.getElementById('save-btn'),
    a4ContentWrapper: document.getElementById('a4-content-wrapper'),
    previewCanvas: document.getElementById('pdf-canvas-preview'),
    toast: document.getElementById('toast-notification'),
    productModal: document.getElementById('product-modal'),
    manageProductsBtn: document.getElementById('manage-products-btn'),
    closeProductModalBtn: document.getElementById('close-product-modal-btn'),
    productForm: document.getElementById('product-form'),
    productManagementTable: document.getElementById('product-management-table'),
    editIndex: document.getElementById('edit-index'),
    productName: document.getElementById('product-name'),
    productUnit: document.getElementById('product-unit'),
    cancelEditBtn: document.getElementById('cancel-edit-btn'),
    importExcelBtn: document.getElementById('import-excel-btn'),
    exportExcelBtn: document.getElementById('export-excel-btn'),
    excelImporter: document.getElementById('excel-importer'),
    historyModal: document.getElementById('history-modal'),
    historyBtn: document.getElementById('history-btn'),
    closeHistoryModalBtn: document.getElementById('close-history-modal-btn'),
    historyTableBody: document.getElementById('history-table-body'),
    exportHistoryBtn: document.getElementById('export-history-btn'),
    formTitle: document.getElementById('form-title'),
    labelRegistrationNo: document.getElementById('label-registration-no'),
    labelRegistrationDate: document.getElementById('label-registration-date'),
    labelWorkingDate: document.getElementById('label-working-date'),
    labelCargoType: document.getElementById('label-cargo-type'),
    labelContainerType: document.getElementById('label-container-type'),
    labelCustomerName: document.getElementById('label-customer-name'),
    labelAddress: document.getElementById('label-address'),
    labelPhone: document.getElementById('label-phone'),
    labelNotes: document.getElementById('label-notes'),
    thService: document.getElementById('th-service'),
    thSizeType: document.getElementById('th-size-type'),
    thQty: document.getElementById('th-qty'),
    actionsTitle: document.getElementById('actions-title'),
    previewPlaceholder: document.getElementById('preview-placeholder'),
    modalProductTitle: document.getElementById('modal-product-title'),
    labelModalName: document.getElementById('label-modal-name'),
    labelModalUnit: document.getElementById('label-modal-unit'),
    btnModalSave: document.getElementById('btn-modal-save'),
    thModalName: document.getElementById('th-modal-name'),
    thModalUnit: document.getElementById('th-modal-unit'),
    thModalAction: document.getElementById('th-modal-action'),
    modalHistoryTitle: document.getElementById('modal-history-title'),
    thHistoryDate: document.getElementById('th-history-date'),
    thHistoryNo: document.getElementById('th-history-no'),
    thHistoryCustomer: document.getElementById('th-history-customer'),
    thHistoryWorkingDate: document.getElementById('th-history-working-date'),
    thHistoryAction: document.getElementById('th-history-action'),
};

// --- 3. UTILITY FUNCTIONS ---
const showToast = (message, type = 'success') => { elements.toast.textContent = message; elements.toast.className = `show ${type}`; setTimeout(() => { elements.toast.classList.remove('show'); }, 3000); };
const showModal = (modalElement) => { modalElement.style.display = 'block'; };
const hideModal = (modalElement) => { modalElement.style.display = 'none'; };

// --- 4. UI UPDATE FUNCTIONS ---
function createTableRow() {
    const row = document.createElement('tr');
    row.className = 'item-row';
    const productOptions = state.products.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
    const selectOptionText = i18n.selectOption[state.currentLang];

    row.innerHTML = `
        <td class="px-4 py-2 align-top">
            <select class="product-select mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm">
                <option value="">${selectOptionText}</option>
                ${productOptions}
            </select>
        </td>
        <td class="px-4 py-2 align-top">
            <select class="size-select mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm">
                <option>20'</option>
                <option>40'</option>
                <option>45'</option>
            </select>
        </td>
        <td class="px-4 py-2 align-top"><input type="number" class="qty-input mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm" value="1" min="1"></td>
        <td class="px-2 py-2 align-top text-center"><button class="remove-row-btn text-red-500 hover:text-red-700 font-bold">×</button></td>
    `;
    elements.tableBody.appendChild(row);
}

function populateCargoTypes() {
    const select = elements.cargoTypeSelect;
    select.innerHTML = ''; 
    
    i18n.cargoTypes[state.currentLang].forEach(cargo => {
        const option = document.createElement('option');
        option.value = cargo;
        option.textContent = cargo;
        select.appendChild(option);
    });

    const otherOption = document.createElement('option');
    otherOption.value = i18n.otherCargo[state.currentLang];
    otherOption.textContent = i18n.otherCargo[state.currentLang];
    select.appendChild(otherOption);
}

function getCargoValue() {
    const selectedValue = elements.cargoTypeSelect.value;
    const otherValue = elements.cargoTypeOther.value.trim();
    if (selectedValue === i18n.otherCargo[state.currentLang]) {
        return otherValue || selectedValue;
    }
    return selectedValue;
}

function resetForm(confirmNeeded = true) { 
    const doReset = () => {
        elements.customerName.value = ''; elements.customerAddress.value = ''; elements.customerPhone.value = ''; elements.customerNotes.value = '';
        elements.containerType.value = '';
        elements.tableBody.innerHTML = '';
        init(false);
        showToast(i18n.toastNewRegistration[state.currentLang], 'info');
    };
    if (confirmNeeded && confirm('Tạo phiếu đăng ký mới sẽ xóa toàn bộ thông tin hiện tại. Bạn có chắc chắn?')) {
        doReset();
    } else if (!confirmNeeded) {
        doReset();
    }
}

function renderProductManagementTable() { 
    elements.productManagementTable.innerHTML = ''; 
    state.products.forEach((p, index) => { 
        const row = elements.productManagementTable.insertRow(); 
        row.innerHTML = `<td class="p-2">${p.name}</td><td class="p-2 text-center">${p.unit}</td><td class="p-2 text-center"><button class="edit-product-btn px-2 py-1 bg-yellow-500 text-white rounded text-sm" data-index="${index}">${i18n.view[state.currentLang]}</button> <button class="delete-product-btn px-2 py-1 bg-red-600 text-white rounded text-sm" data-index="${index}">${i18n.delete[state.currentLang]}</button></td>`; 
    }); 
}

function renderHistoryTable() { 
    let savedRegistrations = JSON.parse(localStorage.getItem(`tanthuan_registrations_${state.currentLang}`)) || []; 
    savedRegistrations.sort((a, b) => b.id.localeCompare(a.id)); 
    elements.historyTableBody.innerHTML = savedRegistrations.length === 0 ? `<tr><td colspan="5" class="text-center p-4">Không tìm thấy dữ liệu.</td></tr>` : ''; 
    savedRegistrations.forEach(q => { 
        const row = elements.historyTableBody.insertRow(); 
        row.innerHTML = `<td class="p-2">${q.registrationDate}</td><td class="p-2">${q.registrationNumber}</td><td class="p-2">${q.customerName}</td><td class="p-2">${q.workingDate}</td><td class="p-2 text-center"><button class="view-history-btn px-2 py-1 bg-blue-500 text-white rounded text-sm" data-id="${q.id}">${i18n.view[state.currentLang]}</button> <button class="delete-history-btn px-2 py-1 bg-red-600 text-white rounded text-sm" data-id="${q.id}">${i18n.delete[state.currentLang]}</button></td>`; 
    }); 
}

function resetProductForm() { 
    elements.productForm.reset(); 
    elements.editIndex.value = -1; 
    elements.cancelEditBtn.style.display = 'none'; 
}

function translateUI() {
    document.documentElement.lang = state.currentLang;
    elements.appTitle.textContent = i18n.appTitle[state.currentLang];
    elements.developedByLine.textContent = i18n.developedBy[state.currentLang];
    elements.manageProductsBtn.textContent = i18n.manageServices[state.currentLang];
    elements.historyBtn.textContent = i18n.history[state.currentLang];
    elements.formTitle.textContent = i18n.formTitle[state.currentLang];
    elements.labelRegistrationNo.textContent = i18n.registrationNo[state.currentLang];
    elements.labelRegistrationDate.textContent = i18n.registrationDate[state.currentLang];
    elements.labelWorkingDate.textContent = i18n.workingDate[state.currentLang];
    elements.labelCargoType.textContent = i18n.cargoType[state.currentLang];
    elements.labelContainerType.textContent = i18n.containerType[state.currentLang];
    elements.labelCustomerName.textContent = i18n.customerName[state.currentLang];
    elements.labelAddress.textContent = i18n.address[state.currentLang];
    elements.labelPhone.textContent = i18n.phone[state.currentLang];
    elements.labelNotes.textContent = i18n.notes[state.currentLang];
    elements.thService.textContent = i18n.thService[state.currentLang];
    elements.thSizeType.textContent = i18n.thSizeType[state.currentLang];
    elements.thQty.textContent = i18n.thQty[state.currentLang];
    elements.addRowBtn.textContent = i18n.addRow[state.currentLang];
    elements.actionsTitle.textContent = i18n.actionsTitle[state.currentLang];
    elements.newBtn.textContent = i18n.newRegistration[state.currentLang];
    elements.saveBtn.textContent = i18n.saveRegistration[state.currentLang];
    elements.renderPreviewBtn.textContent = i18n.updatePreview[state.currentLang];
    elements.generatePdfBtn.textContent = i18n.printPdf[state.currentLang];
    elements.previewPlaceholder.textContent = i18n.previewPlaceholder[state.currentLang];
    elements.modalProductTitle.textContent = i18n.modalProductTitle[state.currentLang];
    elements.importExcelBtn.textContent = i18n.importExcel[state.currentLang];
    elements.exportExcelBtn.textContent = i18n.exportExcel[state.currentLang];
    elements.exportHistoryBtn.textContent = i18n.exportHistory[state.currentLang];
    elements.labelModalName.textContent = i18n.modalName[state.currentLang];
    elements.labelModalUnit.textContent = i18n.modalUnit[state.currentLang];
    elements.btnModalSave.textContent = i18n.btnModalSave[state.currentLang];
    elements.cancelEditBtn.textContent = i18n.btnCancel[state.currentLang];
    elements.thModalName.textContent = i18n.modalName[state.currentLang];
    elements.thModalUnit.textContent = i18n.modalUnit[state.currentLang];
    elements.thModalAction.textContent = i18n.action[state.currentLang];
    elements.modalHistoryTitle.textContent = i18n.modalHistoryTitle[state.currentLang];
    elements.thHistoryDate.textContent = i18n.date[state.currentLang];
    elements.thHistoryNo.textContent = i18n.registrationNo[state.currentLang];
    elements.thHistoryCustomer.textContent = i18n.customer[state.currentLang];
    elements.thHistoryWorkingDate.textContent = i18n.workingDate[state.currentLang];
    elements.thHistoryAction.textContent = i18n.action[state.currentLang];
    populateCargoTypes();
}

// --- 5. DATA MANAGEMENT (LocalStorage) ---
function saveProducts() { 
    localStorage.setItem(`tanthuan_services_${state.currentLang}`, JSON.stringify(state.products)); 
}

function loadProducts() {
    const defaultProducts = {
        vi: [ { name: 'Vận chuyển container nội bộ Cảng', unit: 'cont' }, { name: 'Đóng hàng cont => xe', unit: 'cont' }, { name: 'Rút hàng xe => cont', unit: 'cont' } ],
        en: [ { name: 'Internal container transport', unit: 'cont' }, { name: 'Stuffing from container to truck', unit: 'cont' }, { name: 'Unstuffing from truck to container', unit: 'cont' } ]
    };
    state.products = JSON.parse(localStorage.getItem(`tanthuan_services_${state.currentLang}`)) || defaultProducts[state.currentLang];
}

function validateForm() {
    if (!elements.registrationNumber.value || !elements.customerName.value) {
        showToast('Vui lòng nhập Số đăng ký và Tên khách hàng.', 'error');
        return false;
    }
    return true;
}

function saveRegistration() {
    if (!validateForm()) return;

    const newRegistration = {
        id: `REG-${Date.now()}`,
        registrationNumber: elements.registrationNumber.value,
        registrationDate: elements.registrationDate.value,
        customerName: elements.customerName.value,
        customerAddress: elements.customerAddress.value,
        customerPhone: elements.customerPhone.value,
        workingDate: elements.workingDate.value,
        cargoType: getCargoValue(),
        containerType: elements.containerType.value,
        customerNotes: elements.customerNotes.value,
        items: Array.from(elements.tableBody.querySelectorAll('.item-row')).map(row => ({
            name: row.querySelector('.product-select').value,
            size: row.querySelector('.size-select').value,
            quantity: row.querySelector('.qty-input').value,
        })).filter(item => item.name)
    };

    let savedRegistrations = JSON.parse(localStorage.getItem(`tanthuan_registrations_${state.currentLang}`)) || [];
    savedRegistrations.push(newRegistration);
    localStorage.setItem(`tanthuan_registrations_${state.currentLang}`, JSON.stringify(savedRegistrations));

    showToast(i18n.toastSaveSuccess[state.currentLang].replace('{name}', newRegistration.customerName));
}

function loadRegistration(id) { 
    let savedRegistrations = JSON.parse(localStorage.getItem(`tanthuan_registrations_${state.currentLang}`)) || []; 
    const q = savedRegistrations.find(q => q.id === id); 
    if (!q) { showToast('Không tìm thấy phiếu đăng ký!', 'error'); return; } 
    
    elements.registrationNumber.value = q.registrationNumber; 
    elements.registrationDate.value = q.registrationDate; 
    elements.customerName.value = q.customerName; 
    elements.customerAddress.value = q.customerAddress; 
    elements.customerPhone.value = q.customerPhone; 
    elements.workingDate.value = q.workingDate;
    elements.containerType.value = q.containerType;
    elements.customerNotes.value = q.customerNotes; 
    
    const cargoList = i18n.cargoTypes[state.currentLang];
    const otherCargoText = i18n.otherCargo[state.currentLang];
    if (cargoList.includes(q.cargoType)) {
        elements.cargoTypeSelect.value = q.cargoType;
        elements.cargoTypeOther.style.display = 'none';
        elements.cargoTypeOther.value = '';
    } else {
        elements.cargoTypeSelect.value = otherCargoText;
        elements.cargoTypeOther.style.display = 'block';
        elements.cargoTypeOther.value = q.cargoType === otherCargoText ? '' : q.cargoType;
    }
    
    elements.tableBody.innerHTML = ''; 
    q.items.forEach(item => { 
        createTableRow(); 
        const lastRow = elements.tableBody.lastElementChild; 
        lastRow.querySelector('.product-select').value = item.name; 
        lastRow.querySelector('.size-select').value = item.size;
        lastRow.querySelector('.qty-input').value = item.quantity; 
    }); 
    showToast(i18n.toastLoadSuccess[state.currentLang].replace('{name}', q.customerName)); 
}

function deleteRegistration(id) { 
    let savedRegistrations = JSON.parse(localStorage.getItem(`tanthuan_registrations_${state.currentLang}`)) || []; 
    localStorage.setItem(`tanthuan_registrations_${state.currentLang}`, JSON.stringify(savedRegistrations.filter(q => q.id !== id))); 
    showToast(i18n.toastDeleteSuccess[state.currentLang], 'info'); 
}

function generateNextRegistrationNumber() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const dateStr = `${day}${month}`;
    
    let lastRegInfo = JSON.parse(localStorage.getItem('lastRegInfo')) || { date: '', counter: 0 };
    
    let counter = 1;
    if (lastRegInfo.date === dateStr) {
        counter = lastRegInfo.counter + 1;
    }
    
    localStorage.setItem('lastRegInfo', JSON.stringify({ date: dateStr, counter: counter }));
    
    const prefix = 'ĐK';
    return `${prefix}${dateStr}-${String(counter).padStart(3, '0')}`;
}

// --- 6. PDF & PREVIEW GENERATION ---
async function waitForImageLoad(imageElement) {
    return new Promise((resolve, reject) => {
        if (!imageElement) return resolve();
        if (imageElement.complete && imageElement.naturalHeight !== 0) return resolve();
        imageElement.onload = () => resolve();
        imageElement.onerror = (err) => reject(err);
    });
}

function generateA4HTML() {
    const pdfText = i18n.pdf;
    let itemsHTML = '';
    document.querySelectorAll('.item-row').forEach((row, index) => {
        const select = row.querySelector('.product-select');
        const productName = select.value;
        if (!productName) return;

        const product = state.products.find(p => p.name === productName);
        const unit = product ? product.unit : '';
        const size = row.querySelector('.size-select').value;
        const qty = row.querySelector('.qty-input').value;

        itemsHTML += `
            <tr class="border-b">
                <td style="padding: 8px; border: 1px solid #ccc; text-align: center;">${index + 1}</td>
                <td style="padding: 8px; border: 1px solid #ccc; word-break: break-word; white-space: normal;">${productName}</td>
                <td style="padding: 8px; border: 1px solid #ccc; text-align: center;">${size}</td>
                <td style="padding: 8px; border: 1px solid #ccc; text-align: center;">${unit}</td>
                <td style="padding: 8px; border: 1px solid #ccc; text-align: center;">${qty}</td>
            </tr>
        `;
    });
    
    const cargoToDisplay = getCargoValue();

    return `
        <div style="font-family: 'Roboto', sans-serif; color: #000;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
                <tr>
                    <td style="width: 60%; vertical-align: top; position: relative; padding: 0;">
                        <img src="logo.png" alt="Logo" style="width: 90px; height: auto; opacity: 0.15; position: absolute; top: 50%; transform: translateY(-50%); z-index: 1;">
                        <div style="position: relative; z-index: 2; padding-left: 105px;">
                            <h3 style="font-size: 1.125rem; font-weight: 700; margin:0 0 5px 0;">${pdfText.companyName[state.currentLang]}</h3>
                            <p style="margin: 0; font-size: 10pt;">${pdfText.phone[state.currentLang]}:0903758608; 0901196093</p>
                            <p style="margin: 0; font-size: 10pt;">${pdfText.companyAddress[state.currentLang]}</p>
                            <p style="margin: 0; font-size: 10pt;">${pdfText.email[state.currentLang]}: kdkt.tt@saigonport.vn</p>
                        </div>
                    </td>
                    <td style="width: 40%; vertical-align: top; text-align: right;">
                        <p style="margin: 0; font-size: 11pt;"><strong>${pdfText.registrationNo[state.currentLang]}:</strong> ${elements.registrationNumber.value}</p>
                        <p style="margin: 0; font-size: 11pt;"><strong>${pdfText.date[state.currentLang]}:</strong> ${elements.registrationDate.value}</p>
                    </td>
                </tr>
            </table>
            
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <h1 style="font-size: 2.25rem; font-weight: 700; margin-bottom: 0;">${pdfText.title[state.currentLang]}</h1>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.2rem; font-size: 11pt;">
                 <tr><td style="padding: 2px 0; width: 15%; font-weight: bold; white-space: nowrap; vertical-align: top;">${pdfText.customerName[state.currentLang]}:</td><td style="padding: 2px 0;">${elements.customerName.value}</td></tr>
                 <tr><td style="padding: 2px 0; width: 15%; font-weight: bold; white-space: nowrap; vertical-align: top;">${pdfText.address[state.currentLang]}:</td><td style="padding: 2px 0;">${elements.customerAddress.value}</td></tr>
                 <tr><td style="padding: 2px 0; width: 15%; font-weight: bold; white-space: nowrap; vertical-align: top;">${pdfText.phone[state.currentLang]}:</td><td style="padding: 2px 0;">${elements.customerPhone.value}</td></tr>
                 <tr><td style="padding: 2px 0; width: 15%; font-weight: bold; white-space: nowrap; vertical-align: top;">${pdfText.workingDate[state.currentLang]}:</td><td style="padding: 2px 0;">${elements.workingDate.value}</td></tr>
                 <tr><td style="padding: 2px 0; width: 15%; font-weight: bold; white-space: nowrap; vertical-align: top;">${pdfText.cargoType[state.currentLang]}:</td><td style="padding: 2px 0;">${cargoToDisplay}</td></tr>
                 <tr><td style="padding: 2px 0; width: 15%; font-weight: bold; white-space: nowrap; vertical-align: top;">${pdfText.containerType[state.currentLang]}:</td><td style="padding: 2px 0;">${elements.containerType.value}</td></tr>
                 <tr><td style="padding: 2px 0; width: 15%; font-weight: bold; white-space: nowrap; vertical-align: top;">${pdfText.notes[state.currentLang]}:</td><td style="padding: 2px 0; word-break: break-word; white-space: normal;">${elements.customerNotes.value}</td></tr>
            </table>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: 11pt;">
                <thead style="background-color: #e0e0e0 !important; -webkit-print-color-adjust: exact;">
                    <tr>
                        <th style="width: 5%; text-align: center; padding: 8px; border: 1px solid #ccc;">${pdfText.thNo[state.currentLang]}</th>
                        <th style="width: 55%; text-align: left; padding: 8px; border: 1px solid #ccc;">${pdfText.thService[state.currentLang]}</th>
                        <th style="width: 15%; text-align: center; padding: 8px; border: 1px solid #ccc;">${pdfText.thSize[state.currentLang]}</th>
                        <th style="width: 10%; text-align: center; padding: 8px; border: 1px solid #ccc;">${pdfText.thUnit[state.currentLang]}</th>
                        <th style="width: 15%; text-align: center; padding: 8px; border: 1px solid #ccc;">${pdfText.thQty[state.currentLang]}</th>
                    </tr>
                </thead>
                <tbody>${itemsHTML}</tbody>
            </table>
            
            <div style="margin-top: 20px; font-size: 10pt; border: 1px solid #ddd; padding: 10px 15px; border-radius: 5px; background-color: #f9f9f9 !important; -webkit-print-color-adjust: exact;">
                <h4 style="font-weight: bold; margin: 0 0 8px 0; font-size: 11pt;">${pdfText.quoteNotesTitle[state.currentLang]}</h4>
                <ul class="custom-list">
                    ${pdfText.quoteNotesContent[state.currentLang]}
                </ul>
            </div>
        </div>
    `;
}

async function renderPreviewToCanvas() { 
    if (!validateForm()) return;
    showToast(i18n.updatePreview[state.currentLang], 'info'); 
    try {
        elements.a4ContentWrapper.innerHTML = generateA4HTML(); 
        await new Promise(resolve => setTimeout(resolve, 0));
        await Promise.all([waitForImageLoad(document.querySelector('#a4-content-wrapper img[alt="Logo"]')), document.fonts.ready]);

        const canvas = await html2canvas(elements.a4ContentWrapper, { scale: 1.5, useCORS: true }); 
        const a4Ratio = 297 / 210; 
        elements.previewCanvas.width = canvas.width; 
        elements.previewCanvas.height = canvas.height; 
        elements.previewCanvas.style.height = (elements.previewCanvas.clientWidth * a4Ratio) + 'px'; 
        const ctx = elements.previewCanvas.getContext('2d'); 
        ctx.drawImage(canvas, 0, 0, elements.previewCanvas.width, elements.previewCanvas.height); 
    } catch (error) { 
        showToast('Lỗi tạo bản xem trước. Kiểm tra Console (F12).', 'error'); 
        console.error("html2canvas error (Preview):", error); 
    } 
}

async function generatePdf() {
    if (!validateForm()) return;
    elements.generatePdfBtn.disabled = true; 
    showToast('Đang chuẩn bị PDF...', 'info'); 
    try { 
        elements.a4ContentWrapper.innerHTML = generateA4HTML(); 
        await new Promise(resolve => setTimeout(resolve, 0));
        await Promise.all([waitForImageLoad(document.querySelector('#a4-content-wrapper img[alt="Logo"]')), document.fonts.ready]);

        const { jsPDF } = window.jspdf; 
        const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' }); 
        const canvas = await html2canvas(elements.a4ContentWrapper, { scale: 1.5, useCORS: true }); 
        const imgData = canvas.toDataURL('image/jpeg', 0.85);
        const pdfWidth = doc.internal.pageSize.getWidth(); 
        const pdfHeight = doc.internal.pageSize.getHeight(); 
        doc.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
        doc.output('dataurlnewwindow'); 
    } catch (error) { 
        showToast('Lỗi tạo PDF. Kiểm tra Console (F12).', 'error'); 
        console.error("html2canvas error (PDF Export):", error); 
    } finally {
        elements.generatePdfBtn.disabled = false; 
    }
}

// --- 7. EVENT HANDLERS ---
function handleLangToggle() {
    state.currentLang = state.currentLang === 'vi' ? 'en' : 'vi';
    localStorage.setItem('appLang', state.currentLang);
    loadProducts();
    resetForm(false);
    translateUI();
}

function handleTableRowClick(e) {
    if (e.target.classList.contains('remove-row-btn')) {
        e.target.closest('.item-row').remove();
    }
}

function handleProductFormSubmit(e) {
    e.preventDefault();
    const name = elements.productName.value;
    const unit = elements.productUnit.value;
    const index = parseInt(elements.editIndex.value);
    
    if (index === -1) {
        state.products.unshift({ name, unit });
    } else {
        state.products[index] = { name, unit };
    }
    
    saveProducts();
    renderProductManagementTable();
    resetProductForm();
}

function handleProductTableClick(e) {
    const index = e.target.dataset.index;
    if (!index) return;

    if (e.target.classList.contains('delete-product-btn')) {
        if (confirm(`Xóa dịch vụ "${state.products[index].name}"?`)) {
            state.products.splice(index, 1);
            saveProducts();
            renderProductManagementTable();
        }
    }
    if (e.target.classList.contains('edit-product-btn')) {
        const p = state.products[index];
        elements.productName.value = p.name;
        elements.productUnit.value = p.unit;
        elements.editIndex.value = index;
        elements.cancelEditBtn.style.display = 'inline-block';
    }
}

function handleExcelImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const workbook = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
            const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
            if (!json || json.length === 0) {
                showToast(i18n.toastImportNoData[state.currentLang], 'error');
                return;
            }
            const newProducts = json.map(item => ({ name: item['Name'], unit: item['Unit'] }));
            if (confirm(i18n.confirmImport[state.currentLang].replace('{count}', newProducts.length))) {
                state.products = newProducts;
                saveProducts();
                renderProductManagementTable();
                showToast(i18n.toastTariffUpdated[state.currentLang]);
            }
        } catch (error) {
            showToast(i18n.toastError[state.currentLang], 'error');
            console.error("Excel import error:", error);
        } finally {
            event.target.value = '';
        }
    };
    reader.readAsArrayBuffer(file);
}

function handleExcelExport() {
    const dataToExport = state.products.map(p => ({ 'Name': p.name, 'Unit': p.unit }));
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Services');
    XLSX.writeFile(workbook, 'Service_List_TanThuan.xlsx');
    showToast(i18n.toastExportSuccess[state.currentLang]);
}

function handleHistoryTableClick(e) {
    const id = e.target.dataset.id;
    if (!id) return;
    if (e.target.classList.contains('view-history-btn')) {
        loadRegistration(id);
        hideModal(elements.historyModal);
    }
    if (e.target.classList.contains('delete-history-btn')) {
        if (confirm('Bạn có chắc muốn xóa phiếu đăng ký này không?')) {
            deleteRegistration(id);
            renderHistoryTable();
        }
    }
}

function handleCargoTypeChange() {
    if (elements.cargoTypeSelect.value === i18n.otherCargo[state.currentLang]) {
        elements.cargoTypeOther.style.display = 'block';
        elements.cargoTypeOther.value = '';
        elements.cargoTypeOther.focus();
    } else {
        elements.cargoTypeOther.style.display = 'none';
    }
}

function handleWindowClick(event) {
    if (event.target == elements.productModal) {
        hideModal(elements.productModal);
        resetProductForm();
    }
    if (event.target == elements.historyModal) {
        hideModal(elements.historyModal);
    }
}

// --- 8. INITIALIZATION ---
function bindEvents() {
    elements.langToggleBtn.addEventListener('click', handleLangToggle);
    elements.addRowBtn.addEventListener('click', createTableRow);
    elements.tableBody.addEventListener('click', handleTableRowClick);
    elements.newBtn.addEventListener('click', () => resetForm(true));
    elements.saveBtn.addEventListener('click', saveRegistration);
    elements.renderPreviewBtn.addEventListener('click', renderPreviewToCanvas);
    elements.generatePdfBtn.addEventListener('click', generatePdf);
    
    elements.manageProductsBtn.addEventListener('click', () => { showModal(elements.productModal); renderProductManagementTable(); });
    elements.closeProductModalBtn.addEventListener('click', () => { hideModal(elements.productModal); resetProductForm(); });
    elements.cancelEditBtn.addEventListener('click', resetProductForm);
    elements.productForm.addEventListener('submit', handleProductFormSubmit);
    elements.productManagementTable.addEventListener('click', handleProductTableClick);
    
    elements.importExcelBtn.addEventListener('click', () => elements.excelImporter.click());
    elements.exportExcelBtn.addEventListener('click', handleExcelExport);
    elements.excelImporter.addEventListener('change', handleExcelImport);
    
    elements.historyBtn.addEventListener('click', () => { showModal(elements.historyModal); renderHistoryTable(); });
    elements.closeHistoryModalBtn.addEventListener('click', () => { hideModal(elements.historyModal); });
    elements.historyTableBody.addEventListener('click', handleHistoryTableClick);
    
    elements.cargoTypeSelect.addEventListener('change', handleCargoTypeChange);
    
    window.addEventListener('click', handleWindowClick);
}

function init(showWelcome = true) {
    loadProducts();
    translateUI();

    const dateTimeOptions = {
        enableTime: true,
        dateFormat: "d/m/Y H:i",
        time_24hr: true,
        defaultDate: new Date()
    };

    flatpickr(elements.registrationDate, dateTimeOptions);
    flatpickr(elements.workingDate, dateTimeOptions);

    elements.registrationNumber.value = generateNextRegistrationNumber();
    if (showWelcome) {
        elements.tableBody.innerHTML = '';
        createTableRow();
        showToast(i18n.toastReady[state.currentLang]);
    }
}

// --- APP ENTRY POINT ---
document.addEventListener('DOMContentLoaded', () => {
    init();
    bindEvents();

});
