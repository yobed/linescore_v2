import React from "react"
import { formatVector } from "./formatter";


type GameScoreRow = {
  game_id: string
  date: string
  home_team: string
  away_team: string
  home_line_vector: number[] | string
  away_line_vector: number[] | string
  home_distance: number
  away_distance: number
  total_distance: number
}




export function GameScoreResultsTable({ rows }: { rows: GameScoreRow[] }) {

  return (
    <div className="mt-4 p-2 bg-gray-50 rounded text-md overflow-x-auto w-full mx-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className='bg-gray-75'>
            <th className="pr-4">Date</th>
            <th className="pr-4">Game ID</th>
            <th className="pr-4">Home Team</th>
            <th className="pr-4">Away Team</th>
            <th className="pr-4">Home Line Vector</th>
            <th className="pr-4">Away Line Vector</th>
            <th className="pr-4">Home Distance</th>
            <th className="pr-4">Away Distance</th>
            <th className="pr-4">Total Distance</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.game_id} className={
              row.total_distance === 0 ? "bg-green-50 border-b border-gray-200"
                :
                idx % 2 === 0 ? "bg-white border-b border-gray-200" : "bg-gray-50 border-b border-gray-200"
            }>
              <td className="pr-4 whitespace-nowrap font-mon">{row.date}</td>
              <td className="pr-4">{row.game_id}</td>
              <td className="pr-4">{row.home_team}</td>
              <td className="pr-4">{row.away_team}</td>
              <td className="pr-4 whitespace-nowrap font-mon">
                {formatVector(row.home_line_vector)}
              </td>
              <td className="pr-4 whitespace-nowrap font-mon  ">
                {formatVector(row.away_line_vector)}
              </td>
              <td className="pr-4">{row.home_distance}</td>
              <td className="pr-4">{row.away_distance}</td>
              <td className="pr-4">{row.total_distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}