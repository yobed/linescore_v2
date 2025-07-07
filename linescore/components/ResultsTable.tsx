import { formatVector } from "./formatter";
import React from "react";

type LineScoreRow = {
  id: string
  date: string
  team_id: string
  opponent: string
  game_id: string
  line_vector: number[] | string
  score_distance: number
}



interface ResultsTableProps {
  rows: LineScoreRow[];
}


export function ResultsTable({ rows }: ResultsTableProps) {
  return (
    <div className="mt-4 p-2 bg-gray-50 rounded text-md overflow-x-auto w-full mx-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className='bg-gray-75'>
            <th className="pr-4">Date</th>
            <th className="pr-4">Team</th>
            <th className="pr-4">Opponent</th>
            <th className="pr-4">Game ID</th>
            <th className="pr-4">Line Vector</th>
            <th className="pr-4">Score Distance</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.id} className={
              row.score_distance === 0 ? "bg-green-50 border-b border-gray-200"
                :
                idx % 2 === 0 ? "bg-white border-b border-gray-200" : "bg-gray-50 border-b border-gray-200"
            }>
              <td className="pr-4 whitespace-nowrap font-mon">{row.date}</td>
              <td className="pr-4">{row.team_id}</td>
              <td className="pr-4">{row.opponent}</td>
              <td className="pr-4">{row.game_id}</td>
              <td className="pr-4 whitespace-nowrap font-mon">
                {formatVector(row.line_vector)}
              </td>
              <td className="pr-4">{row.score_distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}