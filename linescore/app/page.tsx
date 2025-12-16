import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Reusing the background image from the main page for consistency */}
      <div className="min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/sdad.jpg')" }}>
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <Card className="w-full max-w-md shadow-lg bg-white/90 backdrop-blur-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Under Maintenance</CardTitle>
              <CardDescription>
                Linescore is currently under going maintenance. <br></br>Open Source @ github.com/yobed
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600">
                Issues like Supabase pausing the database; new data to be brought in; and other updates along the way.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

// 'use client'

// import { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { supabase } from '@/lib/supabase';
// import { Progress } from "@/components/ui/progress"
// import { Label } from '@/components/ui/label';
// import { Header } from '@/components/ui/header';
// import { GameScoreResultsTable } from '@/components/GameScoreResultsTable';
// import { ResultsTable } from '@/components/ResultsTable';

// // Our settings:
// // Max vector size because of length of longest baseball game
// const MAX_VECTOR_SIZE = 26;
// // 
// // Our client
// async function queryLineScore(vector: number[]) {
//   const { data, error } = await supabase.rpc('match_linescore', {
//     query_vector: vector, // parameter name must match your function definition
//   });

//   if (error) {
//     console.error('Supabase RPC error:', error);
//     return null;
//   }
//   return data;
// }

// async function queryGameScore(home_vector: number[], vis_vector: number[]) {
//   const { data, error } = await supabase.rpc('match_game_by_linescores', {
//     home_vector: home_vector,
//     away_vector: vis_vector // parameter name must match your function definition
//   });

//   if (error) {
//     console.error('Supabase RPC error:', error);
//     return null;
//   }
//   return data;
// }

// type LineScoreRow = {
//   id: string
//   date: string
//   team_id: string
//   opponent: string
//   game_id: string
//   line_vector: number[] | string
//   score_distance: number
// }

// type GameScoreRow = {
//   game_id: string
//   date: string
//   home_team: string
//   away_team: string
//   home_line_vector: number[] | string
//   away_line_vector: number[] | string
//   home_distance: number
//   away_distance: number
//   total_distance: number
// }









// export default function Home() {
//   const [activeTab, setActiveTab] = useState('linescore');
//   const [loading, setLoading] = useState(false)
//   const [progress, setProgress] = useState(0);
//   // vector inputs 
//   const [lineScoreInput, setLineScoreInput] = useState("");
//   const [visitorScoreInput, setVisitorScoreInput] = useState("");
//   const [homeScoreInput, setHomeScoreInput] = useState("");


//   // new results:
//   const [lineScoreResult, setLineScoreResult] = useState<LineScoreRow[]>([]);
//   const [gameScoreResult, setGameScoreResult] = useState<GameScoreRow[]>([]);


//   function padVector(vector: number[], length = 26, padValue = -1): number[] {
//     if (vector.length >= length) return vector.slice(0, length);
//     return vector.concat(Array(length - vector.length).fill(padValue));
//   }

//   function parseLineScore(input: string): number[] | null {
//     // Validate: only numbers and spaces
//     if (!/^[\d\s,]*$/.test(input)) {
//       return null; // Invalid input
//     }
//     // Convert to vector
//     return input
//       .trim()
//       .split(/[\s,]+/)
//       .filter(Boolean) // Remove empty strings
//       .map(Number);
//   }

//   function getValidatedVector(input: string): number[] | null {
//     const vector = parseLineScore(input);
//     if (!vector) {
//       alert("Only enter numbers and spaces.");
//       return null;
//     }
//     return vector;
//   }

//   const handleClick = async () => {
//     setLoading(true);
//     setProgress(0)
//     let prog = 0
//     const interval = setInterval(() => {
//       prog += 15;
//       setProgress(prog);
//       if (prog >= 90) clearInterval(interval);
//     }, 100);
//     try {
//       if (activeTab === 'linescore') {
//         const vector = getValidatedVector(lineScoreInput);
//         if (!vector) return;
//         // padding it with -1 (my db has -1 extended)
//         const padded_vector = padVector(vector, MAX_VECTOR_SIZE, -1)
//         const result = await queryLineScore(padded_vector);
//         console.log(vector);
//         console.log(result);
//         setLineScoreResult(result as LineScoreRow[]);
//       } else if (activeTab === 'gamescore') {
//         const vis_vector = getValidatedVector(visitorScoreInput);
//         if (!vis_vector) return;
//         const home_vector = getValidatedVector(homeScoreInput);
//         if (!home_vector) return;
//         // Use vis_vector and home_vector for game score search
//         console.log(vis_vector, home_vector);
//         const padded_vis = padVector(vis_vector, MAX_VECTOR_SIZE, -1)
//         const padded_home = padVector(home_vector, MAX_VECTOR_SIZE, -1)
//         const result = await queryGameScore(padded_home, padded_vis)
//         console.log(result)
//         setGameScoreResult(result as GameScoreRow[]);
//       }
//       setProgress(100)
//     } finally {
//       setLoading(false)
//       setTimeout(() => setProgress(0), 500);
//     }
//   };

//   return (
//     <main className="relative w-full h-screen overflow-hidden">
//       <div className="min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/sdad.jpg')" }}>
//         <div className="flex flex-col items-center justify-center min-h-screen px-4">
//           {/* Logo and GitHub */}
//           <Header />



//           <Card className="w-full max-w-6xl shadow-lg bg-white/85 backdrop-blur-lg">
//             <CardHeader>
//               <CardTitle className="text-xl font-semibold">Search Baseball Scores</CardTitle>
//               <CardDescription>
//                 <div className="space-y-2">
//                   <div>
//                     <strong>Line Score:</strong> Search for games by entering a single team&apos;s inning-by-inning score.
//                   </div>
//                   <div>
//                     <strong>Game Score:</strong> Search for games by entering both the visiting and home teams&apos; inning-by-inning scores.
//                   </div>
//                 </div>
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <Tabs value={activeTab}
//                 onValueChange={val => { setActiveTab(val); }}
//                 className="w-full">
//                 <TabsList className="grid w-full grid-cols-2">
//                   <TabsTrigger value="linescore">Line Score</TabsTrigger>
//                   <TabsTrigger value="gamescore">Game Score</TabsTrigger>
//                 </TabsList>
//                 <TabsContent value="linescore" className="space-y-4">
//                   <div className="text-sm text-gray-600">
//                     Examples: <strong>0,0,0,0,0,1,0,9</strong> or <strong>0 0 0 0 0 0 1 0 9</strong>
//                   </div>
//                   <Label htmlFor='inn' className='p-1'>Any Innings</Label>
//                   <Input
//                     id='inn'
//                     value={lineScoreInput}
//                     onChange={e => setLineScoreInput(e.target.value)}
//                     placeholder="Any (ex): 0 0 0 0 0 0 0 0 9"
//                   />
//                 </TabsContent>
//                 <TabsContent value="gamescore" className="space-y-4">
//                   <div className="text-sm text-gray-600">
//                     Examples: <strong>0,0,0,0,0,1,0,9</strong> or <strong>0 0 0 0 0 0 1 0 9</strong>
//                   </div>
//                   <div className="gap-3">
//                     <Label htmlFor='vis' className='p-1'>Visitor Innings</Label>
//                     <Input
//                       id='vis'
//                       value={visitorScoreInput}
//                       onChange={e => setVisitorScoreInput(e.target.value)}
//                       placeholder="Visiting (ex): 0 1 2 3 4 6 7 8"
//                     />
//                   </div>
//                   <div className="gap-3">
//                     <Label htmlFor='home' className='p-1'>Home Innings</Label>
//                     <Input
//                       id='home'
//                       value={homeScoreInput}
//                       onChange={e => setHomeScoreInput(e.target.value)}
//                       placeholder="Home (ex): 0 1 2 3 4 6 7 8"
//                     />
//                   </div>
//                 </TabsContent>
//               </Tabs>
//               <Button className="w-full" onClick={handleClick}>
//                 Search {activeTab === 'linescore' ? 'Line Score' : 'Game Score'}
//               </Button>
//               {loading && (
//                 <div className="my-4">
//                   <Progress value={progress} />
//                 </div>
//               )}
//               {activeTab === 'linescore' && lineScoreResult.length > 0 && (
//                 <ResultsTable rows={lineScoreResult} />
//               )}
//               {activeTab === 'gamescore' && gameScoreResult.length > 0 && (
//                 <GameScoreResultsTable rows={gameScoreResult} />
//               )}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </main>
//   );
// }