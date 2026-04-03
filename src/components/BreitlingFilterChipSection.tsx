type BreitlingFilterChipSectionProps<T extends string> = {
  title: string
  items: readonly T[]
  selected: Set<T>
  onToggle: (item: T) => void
}

export function BreitlingFilterChipSection<T extends string>({
  title,
  items,
  selected,
  onToggle,
}: BreitlingFilterChipSectionProps<T>) {
  return (
    <section className="breitling-watch-selector-filter-section">
      <h3 className="breitling-watch-selector-filter-section-title">{title}</h3>
      <div className="breitling-watch-selector-filter-chips" role="group">
        {items.map((item) => {
          const isSelected = selected.has(item)
          return (
            <button
              key={item}
              type="button"
              className={
                isSelected
                  ? 'breitling-watch-selector-filter-chip breitling-watch-selector-filter-chip-selected'
                  : 'breitling-watch-selector-filter-chip'
              }
              aria-pressed={isSelected}
              onClick={() => onToggle(item)}
            >
              {item}
            </button>
          )
        })}
      </div>
    </section>
  )
}
