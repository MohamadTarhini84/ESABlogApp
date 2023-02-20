//import { useEffect, useState, useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from '../components/table';
// import LDmode from '../components/mode';
//import { themeContext } from '../context/lightmodeContext';


function SearchPage() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    // const { theme } = useContext(themeContext)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`/api/search?q=${query}`);
            setData(res.data);
        };
        if (query.length === 0 || query.length > 1) fetchData();
    }, [query]);

    return (
        <div id ={'theme'} className='mt-16 w-1/2 ml-56'>
            <div className="big-c">
                <div className="snt">
                    <input
                        className="search"
                        placeholder="Search..."
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    />
                </div>
                <div >
                    <Table data={data} />
                </div>
            </div>
            {/* <LDmode /> */}
        </div>
    )
}

export default SearchPage;
