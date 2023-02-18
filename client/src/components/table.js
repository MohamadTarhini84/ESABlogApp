import "./table.css";
import { Link } from 'react-router-dom';

const Table = ({ data }) => {
  return (
      <div className='cntnr'>
        {data.map((item) => (
          <Link key={item.id} to={`/user/${item.first_name}`}>
            <h3 className="rslt">{item.first_name}</h3>
          </Link>
        ))}
      </div>
  );
};

export default Table;
