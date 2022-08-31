import './App.css';
import ReactTable from './components/ReactTable';
import {COLUMNS} from "./components/columns"
// import {COLUMNS1} from "./components/columns1"



function App() {
  let myData = [{ id: 1, name: "Raheel", property_name: 'inaequo', quantity: 2, price: 100, total_price: 1000, active: 1 },
  { id: 2, name: "Rasim", property_name: 'Villa', quantity: 10, price: 1200, total_price: 12000, active: 0 },
  { id: 3, name: "asim", property_name: 'jsdjkdfjk', quantity: 12, price: 1200, total_price: 13000, active: 1 },
  { id: 4, name: "wert", property_name: 'ytut', quantity: 12, price: 1100, total_price: 10100, active: 0 },
  { id: 5, name: "trtt", property_name: 'err', quantity: 2, price: 100, total_price: 1000, active: 0 },
  { id: 6, name: "trtt", property_name: 'err', quantity: 2, price: 100, total_price: 1000, active: 0 },
  { id: 7, name: "trtt", property_name: 'err', quantity: 2, price: 100, total_price: 1000, active: 0 },
  { id: 8, name: "trtt", property_name: 'err', quantity: 2, price: 100, total_price: 1000, active: 0 },
  { id: 9, name: "trtt", property_name: 'err', quantity: 2, price: 100, total_price: 1000, active: 0 },
  { id: 10, name: "trtt", property_name: 'err', quantity: 2, price: 100, total_price: 1000, active: 0 },
  { id: 11, name: "trtt", property_name: 'err', quantity: 2, price: 100, total_price: 1000, active: 0 }
]


// let myData1 = [{ id: 1, name: "Raheel", sno: 'fdgh', property_name: 2, quantity: 100, total_price: 1000, active: 1 },
// { id: 2, name: "Rasim", sno: 'Villa', property_name: 10, quantity: 1200, total_price: 12000, active: 0 },
// { id: 3, name: "asim", sno: 'jsdjkdfjk', property_name: 12, quantity: 1200, total_price: 13000, active: 1 },
// { id: 4, name: "wert", sno: 'ytut', property_name: 12, quantity: 1100, total_price: 10100, active: 0 },
// { id: 5, name: "trtt", sno: 'err', property_name: 2, quantity: 100, total_price: 1000, active: 0 },
// { id: 6, name: "trtt", sno: 'err', property_name: 2, quantity: 100, total_price: 1000, active: 0 },
// { id: 7, name: "trtt", sno: 'err', property_name: 2, quantity: 100, total_price: 1000, active: 0 },
// { id: 8, name: "trtt", sno: 'err', property_name: 2, quantity: 100, total_price: 1000, active: 0 },
// { id: 9, name: "trtt", sno: 'err', property_name: 2, quantity: 100, total_price: 1000, active: 0 },
// { id: 10, name: "trtt", sno: 'err', property_name: 2, quantity: 100, total_price: 1000, active: 0 },
// { id: 11, name: "trtt", sno: 'err', property_name: 2, quantity: 100, total_price: 1000, active: 0 }
// ]
  return (
    <>
      <ReactTable  myData={myData} COLUMNS={COLUMNS} />
     {/* <ReactTable  myData={myData1} COLUMNS={COLUMNS1} /> */}
    </>
   

  );
}

export default App;
