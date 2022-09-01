import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import ContentTable from './ContentTable'

const ReactTable = ({myData, COLUMNS}) => {

  

  const columns = useMemo(() => COLUMNS,
  // react-hooks/exhaustive-deps
  
  [])
  const data = useMemo(() => myData, 
  
  // react-hooks/exhaustive-deps
  
  [])
  const getData=()=>{
    console.log('raheel')
  }


  const tableInstance = useTable({
    columns,
    data
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
  return (
    <ContentTable getTableProps={getTableProps} getTableBodyProps={getTableBodyProps} headerGroups={headerGroups} rows={rows} prepareRow={prepareRow}  />
  )
}


export default ReactTable
