// `http://localhost:3000/api/data`

export default function data(req, res) {
  res.status(200).json({ name: 'DATA!!!!' })
}