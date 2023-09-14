/* Rom Basson 313416489 */
/* Shiraz Messer 318971637 */

import './choosedate.css'

// This component facilitates the selection of a month and year for generating a report
// provides buttons for generating the report and closing it, both of which control
// the visibility of the report and costForm components
function ChooseDate(props) {

    return (<div className='chooseDateDiv'>
        <span>
            <label>Month | Year:</label>
            <input type="month" onChange={props.handleMonthChange} required/>
        </span>
        <button className='reportButton' onClick={props.handleReportGeneration}>Generate Report</button>
        <button className='reportButton' onClick={props.closeReport}>Close Report</button>
    </div>);
}

export default ChooseDate;
