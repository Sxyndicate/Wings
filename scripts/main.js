// Sample JSON data embedded in JavaScript for simplicity
const deceasedRecords = [
    {
      "idNumber": "1234567890123",
      "passportNumber": "A12345678",
      "invoiceNumber": "INV001",
      "name": "John",
      "surname": "Doe",
      "hospitalName": "General Hospital",
      "cemeteryName": "Sunset Cemetery",
      "informant": "Jane Doe",
      "coffinType": "Oak Wood",
      "dateOfBirth": "1970-01-01",
      "dateOfDeparture": "2024-01-01",
      "dateOfBurial": "2024-01-07",
      "coffinSpray": "Roses and Lilies",
      "graveMarker": "Granite Headstone"
    },
    {
        "idNumber": "9510055389083",
        "passportNumber": "N/A",
        "invoiceNumber": "INV002",
        "name": "Tshepang",
        "surname": "Sambo",
        "hospitalName": "Helen Joseph Hospital",
        "cemeteryName": "Carltonvile Cemetery",
        "informant": "Kutlwano Ngwato",
        "coffinType": "Silver Oak",
        "dateOfBirth": "1995-10-05",
        "dateOfDeparture": "2024-01-01",
        "dateOfBurial": "2024-01-07",
        "coffinSpray": "Guns and Roses",
        "graveMarker": "Obsidian Headstone"
      },

    // Add more records as needed for testing
  ];
  
  // Search function
  function searchDeceased(searchTerm) {
    const result = deceasedRecords.find(record =>
      record.idNumber === searchTerm ||
      record.passportNumber === searchTerm ||
      record.invoiceNumber === searchTerm
    );
    
    if (result) {
      displayInformation(result);
    } else {
      alert("No information has been captured for this ID.");
      clearInformationDisplay();
    }
  }
  
  // Display function
  function displayInformation(info) {
    document.getElementById('idNumber').textContent = info.idNumber || '';
    document.getElementById('name').textContent = info.name || '';
    document.getElementById('surname').textContent = info.surname || '';
    document.getElementById('hospitalName').textContent = info.hospitalName || '';
    document.getElementById('cemeteryName').textContent = info.cemeteryName || '';
    document.getElementById('informant').textContent = info.informant || '';
    document.getElementById('coffinType').textContent = info.coffinType || '';
    document.getElementById('dateOfBirth').textContent = info.dateOfBirth || '';
    document.getElementById('dateOfDeparture').textContent = info.dateOfDeparture || '';
    document.getElementById('dateOfBurial').textContent = info.dateOfBurial || '';
    document.getElementById('coffinSpray').textContent = info.coffinSpray || '';
    document.getElementById('graveMarker').textContent = info.graveMarker || '';
    document.getElementById('invoiceNumberDisplay').textContent = info.invoiceNumber || '';
  }
  
  // Function to clear information display if no record is found
  function clearInformationDisplay() {
    document.querySelectorAll('#infoDisplay span').forEach(span => {
      span.textContent = '';
    });
  }
  
  // Event listener for the search form
  document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.trim();
    searchDeceased(searchTerm);
  });
  