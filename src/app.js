/* Rom Basson 313416489 */
/* Shiraz Messer 318971637 */
import React, { useState } from "react";
import { idb } from './idbForReact';
import ChooseDate from "./choosedate";
import Report from "./report";
import CostsForm from "./costsform";
import Field from "./field";
import './app.css'

function App() {
    const [costs, setCosts] = useState([]);  // storing cost values
    const [visible, setVisible] = useState(true); // controlling the visibility of the cost form or the report
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // holds the selected month
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // holds the selected month
    const [displayedCosts, setDisplayedCosts] = useState([]); // storing costs to be displayed in the report
    //valid categories
    const categories = ["FOOD", "HEALTH", "EDUCATION", "TRAVEL", "HOUSING", "OTHER"];
    // The fields that will be displayed in the form and report
    const fields = [
        new Field("Category", "select", "Category",categories, true),
        new Field("Quantity", "number", "Quantity"),
        new Field("Description", "text", "Description"),
        new Field("Sum", "number", "Sum",[],true),
        new Field("Date", "date", "Date"),
    ];

    //handle the change of the month selection
    const handleMonthChange = (e) => {
        const date = new Date(e.target.value);
        setSelectedYear(date.getFullYear())
        setSelectedMonth(date.getMonth());
    };

    //handle the change of the year selection
    const handleReportGeneration = async () => {

        setVisible(false);
        const db = await idb.openCostsDB("costsdb", 4);
        //console.log('db:', db); // Add this line

        db.getCost()
            .then(costs => {
                console.log('costs:', costs); // Add this line
                let filteredCosts = costs.filter(cost => {
                    let date = new Date(cost.Date);
                    return date.getMonth() === selectedMonth && date.getFullYear() === selectedYear;
                });
                setDisplayedCosts(filteredCosts);
            })
            .catch(error => {
                console.error(error);
            });
    }

    //close the report and show the costs form
    const closeReport = () => {
        setVisible(true);
    };

    // Display the costs form or the report based on the value of the visible state
    return (
        <div className="mainDiv">
            {
                visible ?
                    <CostsForm costs={costs} setCosts={setCosts} fields={fields} visible={visible} setVisible={setVisible} />
                    :
                    <Report displayedCosts={displayedCosts} fields={fields} visible={visible} setVisible={setVisible} />
            }
            <ChooseDate handleMonthChange={handleMonthChange} handleReportGeneration={handleReportGeneration} closeReport={closeReport}></ChooseDate>
        </div>
    );
}
export default App;

