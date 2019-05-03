
export default function Container(props) {
  return (
    <div style={{
        display: 'flex',
        marginTop: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 1200
    }}>
    {props.children}
    </div>
  )
}