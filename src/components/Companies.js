import React from 'react'
import Company from './Company';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Companies = () => {
	const [page, setPage] = useState(1)
	const api = `https://swapi.dev/api/people/?page=${page}`;
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(api)
			setData((await res.json()))
		}
		fetchData()
	}, [page])

	const handlePageChange = (e) => {
		console.log(e.selected+1)
		setPage(e.selected+1)
	}
	return (
		<div className='d-flex flex-wrap flex-column my-4 mx-2'>
			<div style={{ padding: '12px 20px' }}>
				{data.results?.map((d, i) => {
					return (
						<React.Fragment key={i}>
							<Company data={d} />
						</React.Fragment>
					)
				}
				)}
				<ReactPaginate
					previousLabel={"<"}
					nextLabel={">"}
					breakLabel={''}
					pageCount={Math.ceil(data.count / 10)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={2}
					onPageChange={handlePageChange}
					containerClassName={"pagination"}
					activeClassName={"active"}
					pageClassName={"linkPage"}
				/>
			</div>
		</div>
	)
}

export default Companies