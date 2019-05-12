
export default function Container({ marginTop = 0, children }) {
  return (
    <div style={{
        display: 'flex',
        marginTop,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 1200,
        width: '100%',
        alignItems: 'flex-start',
    }}>
    {children}
    </div>
  )
}
