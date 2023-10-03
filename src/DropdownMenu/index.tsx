import { FC, useState, useEffect, useRef } from 'react'

import { DropdownMenuProps } from './types'

import styles from './index.module.css'
import getCoordinates from '../lib/getCoordinates'

export const DropdownMenu: FC<DropdownMenuProps> = ({ trigger, content, onItemSelect }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isWasOpened, setIsWasOpened] = useState(false)
    const [position, setPosition] = useState<{ top: number; left: number }>({
        top: 0,
        left: 0
    })
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        calculatePosition()
        window.addEventListener('click', handleClickOutside)
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

        return () => {
            window.removeEventListener('click', handleClickOutside)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
        }
    }, [isOpen, windowWidth])

    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false)
        }
    }

    const handleScroll = () => {
        calculatePosition()
        if (dropdownRef.current) {
            const dropdownRect = dropdownRef.current.getBoundingClientRect()
            console.log(dropdownRect.height)
            if (
                isOpen &&
                (dropdownRect.top <= -43 || dropdownRect.bottom >= window.innerHeight + dropdownRect.height)
            ) {
                setIsOpen(false)
                setIsWasOpened(true)
            } else if (
                isWasOpened &&
                dropdownRect.top >= -43 &&
                dropdownRect.bottom <= window.innerHeight + dropdownRect.height
            ) {
                setIsOpen(true)
                setIsWasOpened(false)
            }
        }
    }

    const handleClickTrigger = () => {
        setIsOpen(!isOpen)
    }

    const handleClickItem = (item: string) => {
        setIsOpen(!isOpen)
        onItemSelect(item)
    }

    const calculatePosition = () => {
        if (dropdownRef.current) {
            const coordinates = getCoordinates(
                dropdownRef.current.getBoundingClientRect(),
                dropdownRef.current.querySelectorAll('div')[1],
                windowWidth
            )

            setPosition(coordinates)
        }
    }

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <div onClick={handleClickTrigger}>{trigger}</div>
            <div
                className={styles.content}
                style={{
                    visibility: isOpen ? 'visible' : 'hidden',
                    top: position.top,
                    left: position.left
                }}
            >
                {content.map((item, index) => (
                    <div key={index} className={styles.menuItem} onClick={() => handleClickItem(item)}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
