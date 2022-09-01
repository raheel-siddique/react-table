import React from "react";



const ContentTable=({getCellProps,getHeaderGroupProps, getTableBodyProps, getRowProps,rows,getTableProps,headerGroups,prepareRow})=>{
    return(
        <>
     <table {...getTableProps()} border='1'>
        <thead>
                {headerGroups.map((headerGroup)=>(
                  <tr {...headerGroup.getHeaderGroupProps()}> 
                {headerGroup.headers.map((column)=>(
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}

                  </tr>
                ))}

        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {

                  return (
                    <>
                      <td {...cell.getCellProps()}>{cell.render('Cell')} </td>

                    </>
                  )

                })}
              </tr>
            )
          })}


        </tbody>
      </table>
        </>
    )
}
export default ContentTable