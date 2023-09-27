import React, { useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import * as XLSX from 'xlsx';

//excel파일 읽어서 나타내는 컴포넌트
export function ExcelTableView(){
  
  const [excelData, setExcelData] = useState([]);
  const [sheetNames, setSheetNames] = useState([]);
  const [selectedSheet, setSelectedSheet] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryString = event.target.result;
      const workbook = XLSX.read(binaryString, { type: 'binary' });
      const sheetNames = workbook.SheetNames;
      const selectedSheet = sheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[selectedSheet], {
        defval: '', // 빈 셀을 공백 문자열로 처리
        header: 1,  // 첫 번째 행을 헤더로 인식
      });

      setSheetNames(sheetNames);
      setSelectedSheet(selectedSheet);
      setExcelData(sheetData);
    };

    reader.readAsBinaryString(file);
  };


  return (
    <Container>
      <Row>
        <Col>
          <input type="file" accept=".xlsx" onChange={handleFileUpload} />
        </Col>
      </Row>
      {excelData.length > 0 && (
        <Row>
          <Col>
            <Table bordered striped>
              <thead>
                <tr>
                  {excelData[0].map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {excelData.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );

}


export default ExcelTableView;
