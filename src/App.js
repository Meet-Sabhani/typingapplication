import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

// Define the array of documents
const documents = [
  {
    name: "Cast Certificate",
    requiredDocuments: [
      "Proof of identity",
      "Proof of address",
      "Caste verification form",
    ],
  },
  {
    name: "Cast Validity",
    requiredDocuments: [
      "Cast Certificate",
      "Proof of identity",
      "Proof of address",
    ],
  },
  {
    name: "Pan Card",
    requiredDocuments: [
      "Proof of identity",
      "Proof of address",
      "Date of birth proof",
    ],
  },
  {
    name: "Driving License",
    requiredDocuments: [
      "Proof of identity",
      "Proof of address",
      "Passport size photograph",
    ],
  },
  {
    name: "Passport",
    requiredDocuments: [
      "Proof of identity",
      "Proof of address",
      "Date of birth proof",
    ],
  },
  {
    name: "Voter ID",
    requiredDocuments: ["Proof of identity", "Proof of address"],
  },
  {
    name: "Aadhar Card",
    requiredDocuments: ["Proof of identity", "Proof of address"],
  },
  {
    name: "Ration Card",
    requiredDocuments: ["Proof of identity", "Proof of address"],
  },
  {
    name: "School Leaving Certificate",
    requiredDocuments: ["Proof of identity", "Proof of address"],
  },
  {
    name: "Electricity Bill",
    requiredDocuments: ["Proof of address"],
  },
  {
    name: "Water Bill",
    requiredDocuments: ["Proof of address"],
  },
  {
    name: "Medical Insurance Card",
    requiredDocuments: [
      "Proof of identity",
      "Proof of address",
      "Medical insurance proof",
    ],
  },
  {
    name: "Bank Statement",
    requiredDocuments: ["Proof of address", "Bank account proof"],
  },
  {
    name: "Income Tax Return",
    requiredDocuments: ["Proof of income", "Tax filing proof"],
  },
  {
    name: "Property Deed",
    requiredDocuments: ["Property ownership proof", "Proof of address"],
  },
  {
    name: "Rent Agreement",
    requiredDocuments: ["Rental agreement", "Proof of address"],
  },
  {
    name: "Birth Certificate",
    requiredDocuments: ["Proof of birth", "Parent's identity proof"],
  },
  {
    name: "Marriage Certificate",
    requiredDocuments: ["Proof of marriage", "Spouse's identity proof"],
  },
  {
    name: "Divorce Decree",
    requiredDocuments: ["Divorce certificate", "Proof of marriage"],
  },
  {
    name: "Employment Contract",
    requiredDocuments: ["Proof of employment", "Employer's identity proof"],
  },
  {
    name: "Insurance Policy",
    requiredDocuments: ["Insurance policy document", "Proof of ownership"],
  },
  {
    name: "School Transcript",
    requiredDocuments: ["Academic record", "School identity proof"],
  },
  {
    name: "University Degree",
    requiredDocuments: [
      "Educational qualification proof",
      "University identity proof",
    ],
  },
  {
    name: "Professional License",
    requiredDocuments: ["Professional certification", "Proof of identity"],
  },
  {
    name: "Work Permit",
    requiredDocuments: ["Authorization to work", "Proof of identity"],
  },
  {
    name: "Citizenship Certificate",
    requiredDocuments: ["Proof of citizenship", "Identity verification"],
  },
  {
    name: "Vehicle Registration",
    requiredDocuments: ["Vehicle ownership proof", "Proof of identity"],
  },
  {
    name: "Health Insurance Card",
    requiredDocuments: ["Health insurance document", "Proof of identity"],
  },
  {
    name: "Pension Plan",
    requiredDocuments: ["Pension agreement", "Proof of identity"],
  },
  {
    name: "Credit Card Statement",
    requiredDocuments: ["Credit card usage record", "Proof of address"],
  },
  // Add more data entries as needed...
];

console.log(documents.length); // Output: 30

// Component for rendering document cards
function DocumentCard({ document }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="document-card" onClick={toggleModal}>
      <div className="document-info" onClick={toggleModal}>
        <h2>{document.name}</h2>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          className="view-details-button"
        >
          View Details
        </button>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>{document.name}</h2>
              <div className="document-list">
                <div>Below documents required</div>
                <ol>
                  {document.requiredDocuments.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ol>
              </div>
              <button className="close-button" onClick={toggleModal}>
                Close
              </button>
            </div>
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>Email: vaibhav@example.com</p>
              <p>Phone: +1234567890</p>
              <p>Address: 123 CSC Center, City, Country</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Main App component
function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/login");
  };
  useEffect(() => {
    // Check if a token exists in local storage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // Set the token in component state
      setToken(storedToken);
    }
  }, []);
  const router = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter documents based on the search term
  const filteredDocuments = documents.filter((document) =>
    document.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          {/* <img src={logo} alt="Logo" /> */}
          <h4>Vaibhav Documnets center</h4>
        </div>
        <div style={{ width: "500px" }}>
          <input
            type="text"
            placeholder="Search Documents..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
          </li>

          {/* <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li> */}
        </ul>
      </nav>
      <div className="document-cards">
        {filteredDocuments.map((document, index) => (
          <DocumentCard key={index} document={document} />
        ))}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>@Vaibhav CSC Center</h3>
            <p>Content related to CSC Center</p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>Email: vaibhav@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 CSC Center, City, Country</p>
          </div>
          <div>
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
