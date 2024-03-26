import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const TableData = ({ data, onSubmit }) => {
  return (
    <Table>
      <TableCaption>A list of All Talents.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Level</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead className="text-right">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((row) => {
          return (
            <TableRow key={row.fullName}>
              <TableCell className="font-medium">{row.fullName}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.level}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell className="text-right">
                <button
                  onClick={() => onSubmit(row.fullName).bind(this)}
                  className="border py-2 px-4"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableData;
