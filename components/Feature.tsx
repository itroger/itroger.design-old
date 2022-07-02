const Feature = ({ color }: { color: string[] }) => {
  return (
    <div className="feature">
      <div
        className="feature_1 opacity-20 dark:opacity-60"
        style={{ backgroundColor: color[0] }}
      />
      <div
        className="feature_2 opacity-40 dark:opacity-60"
        style={{ backgroundColor: color[1] }}
      />
      <div
        className="feature_3 opacity-30 dark:opacity-60"
        style={{ backgroundColor: color[2] }}
      />
    </div>
  )
}

export default Feature
