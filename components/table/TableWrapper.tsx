import { FileType } from '@/typings'
import React from 'react'
import { Button } from '../ui/button'
import { init } from 'next/dist/compiled/webpack/webpack'
import { columns } from './Columns'
import { DataTable } from './table'

function TableWrapper({skeletonFiles} : {skeletonFiles: FileType[]}) {
  return (
    <div>
        <Button>Sort By</Button>
        <div className='mt-4'>
            {/* ---
                The data table is imported from ShadCN and the component is added to the components directory
                The columns prop takes in the columns component which defines the headers for the columns as well as any cell rendering needed
            --- */}
            <DataTable columns={columns} data={skeletonFiles}  />
        </div>
    </div>
  )
}

export default TableWrapper