"use client"
import { COLOR_EXTENSION_MAP } from "@/constant"
import { FileType } from "@/typings"
import { ColumnDef } from "@tanstack/react-table"
import prettyBytes from "pretty-bytes"
// @ts-ignore
import { FileIcon, defaultStyles } from 'react-file-icon';

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({renderValue, ...props}) => {
        const type = renderValue();
        // @ts-ignore
        const extension = type.split("/")[1];
        return(
            <div className="w-12">
                {/* Creates an icon from the extension value */}
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
        return (<span>{prettyBytes(renderValue() as number)}</span>)
        // Puts the size value into prettyBytes which turns it into a prettier number for the frontend
    }
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({renderValue, ...props}) => {
        return (
            <a
            href={renderValue() as string}
            target="_blank"
            className="underline text-blue-500 hover:text-blue-500">Download</a>
        )
        // Creates a link to the file download
    }
  },
]
