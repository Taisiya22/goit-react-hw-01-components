import PropTypes from 'prop-types';
import css from "./Statistic.module.css";
export function Statistics({ title, stats }) {
    return (
        <section className={css.statistic}>
            {title && <h2 className={css.title}>Upload stats</h2>}
            <ul className={css.statslist }>
                {stats.map(({ id, label, percentage }) => (<li className={css.item} key={id}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>))}
            </ul>
        </section>)}
               
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }))
    
};        


    
 











