import { useState, useEffect } from 'react'

function useScrollbar(elementRef: React.RefObject<HTMLElement>) {
  const [containerHasScrollbar, setContainerHasScrollbar] = useState(false)

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current
      const hasScrollbar = element.scrollHeight > element.clientHeight

      setContainerHasScrollbar(hasScrollbar)
    }
  }, [elementRef])

  return [containerHasScrollbar]
}

export default useScrollbar
