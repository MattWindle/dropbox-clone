"use client"
import { COLOR_EXTENSION_MAP } from "@/constant"
import { FileType } from "@/typings"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import prettyBytes from "pretty-bytes"
import { FileIcon, defaultStyles } from 'react-file-icon';

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({renderValue, ...props}) => {
        const type = renderValue() as string;
        const extension = type.split("/")[1];
        return(
            <div>
                <FileIcon
                extension={extension}
                // @ts-ignore
                labelColor={COLOR_EXTENSION_MAP[extension]}
                {...defaultStyles[extension]}
                />
            </div>
        )
    }
  },
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
