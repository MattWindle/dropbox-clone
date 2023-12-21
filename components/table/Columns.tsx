"use client"

import { FileType } from "@/typings"
import { ColumnDef } from "@tanstack/react-table"
import { Span } from "next/dist/trace"
import Link from "next/link"
import prettyBytes from "pretty-bytes"

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Data Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({renderValue, ...props}) => {
        return (<span>{prettyBytes(renderValue() as number)}</span>;)
    }
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({renderValue, ...props}) => {
        return (
            <Link
            href={renderValue() as string}
            target="_blank"
            className="underline text-blue-500 hover:text-blue-500">Download</Link>
        )
    }
  },
]
