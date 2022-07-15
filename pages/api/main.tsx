import { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  name: string,
  age: number
}

const data: Data = {
  name: 'Fayha',
  age: 1
}

export default function Main(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data)
}
