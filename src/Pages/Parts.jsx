import { useState, useEffect, useRef } from "react";
import RegularList from "../components/RegularList";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import { saveAs } from "file-saver";
import styled from "styled-components";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "../assets/fonts/Inter-normal.js";

const initialPartsData = {
  1: [
    {
      image: "/images/placeholder50.png",
      name: "Nazwa klocka 1",
      number: "12345",
      initialQuantity: 1,
      price: 0.12,
    },
    {
      image: "/images/placeholder50.png",
      name: "Nazwa klocka 2",
      number: "12346",
      initialQuantity: 2,
      price: 0.15,
    },
    {
      image: "/images/placeholder50.png",
      name: "Nazwa klocka 3",
      number: "12347",
      initialQuantity: 3,
      price: 0.18,
    },
  ],
  2: [
    {
      image: "/images/placeholder50.png",
      name: "Nazwa klocka 3",
      number: "12347",
      initialQuantity: 3,
      price: 0.18,
    },
    {
      image: "/images/placeholder50.png",
      name: "Nazwa klocka 4",
      number: "12348",
      initialQuantity: 4,
      price: 0.21,
    },
  ],
  3: [
    {
      image: "/images/placeholder50.png",
      name: "Nazwa klocka 5",
      number: "12349",
      initialQuantity: 5,
      price: 0.24,
    },
    {
      image: "/images/placeholder50.png",
      name: "Nazwa klocka 6",
      number: "12350",
      initialQuantity: 6,
      price: 0.27,
    },
    {
      image: "/images/placeholder50.png",
      name: "Nazwa klocka 7",
      number: "12351",
      initialQuantity: 7,
      price: 0.3,
    },
  ],
};

const Parts = () => {
  const { setId } = useParams();
  const [items, setItems] = useState(initialPartsData[setId] || []);
  const pdfRef = useRef();

  useEffect(() => {
    setItems(initialPartsData[setId] || []);
  }, [setId]);

  const handleQuantityChange = (partIndex, newQuantity) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[partIndex].initialQuantity = newQuantity;
      return newItems;
    });
  };

  const handleExportCSV = () => {
    const csv = Papa.unparse(items);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `parts_list_${setId}.csv`);
  };

  const handleExportPDF = () => {
    const doc = new jsPDF("p", "px", "a4");
    doc.setFont('Inter', 'normal');
    doc.html(pdfRef.current, {
      callback: function (doc) {
        doc.save(`parts_list_${setId}.pdf`);
      },
      autoPaging: "text",
      x: 10,
      y: 10,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 0.3,
        allowTaint: false,
        logging: true,
        useCORS: true,
      },
    });
  };

  return (
    <div>
      <h1>Części (Parts) - {setId}</h1>
      <ButtonContainer>
        <button onClick={handleExportCSV}>Eksportuj CSV</button>
        <button onClick={handleExportPDF}>Pobierz PDF</button>
      </ButtonContainer>
      <div ref={pdfRef} style={{ padding: "20px", backgroundColor: "white" }}>
        <RegularList items={items} onQuantityChange={handleQuantityChange} />
      </div>
    </div>
  );
};

export default Parts;

const ButtonContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
