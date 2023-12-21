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
            <DataTable columns={columns} data={skeletonFiles}  />
        </div>

    </div>
  )
}

export default TableWrapper