// import PropTypes from 'prop-types';

export function Statistics({ title, stats }) {
    return (
        <section class="statistics">
            {title && <h2 class="title">Upload stats</h2>}
            <ul className="stat-list">
                {stats.map(({id, label, percentage}) => ( <li class="item" key={id}>
                    <span className ="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>))}
            </ul>
        </section>)}
               
// Statistics.propTypes = {
//     title: PropTypes.string,
//     stats: PropTypes.arrayOf(
//         Proptypes.exact ({
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//      }))
    
// }         
    
 











