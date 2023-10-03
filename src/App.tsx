import { FC, useState } from 'react'

import { DropdownMenu } from './DropdownMenu'

export const App: FC = () => {
    const [selectedItem, setSelectedItem] = useState('')

    const handleItemSelect = (item: string) => {
        console.log(`Selected item: ${item}`)
        setSelectedItem(item)
    }

    return (
        <div className="app">
            <div className="background">
                <h1>DropdownMenu</h1>
                {selectedItem && <p>Selected item: {selectedItem}</p>}
            </div>
            <div className="flex">
                <DropdownMenu
                    trigger={<button className="trigger-btn" />}
                    content={['Setting 1.1', 'Setting 1.2', 'Setting 1.3']}
                    onItemSelect={handleItemSelect}
                />

                <DropdownMenu
                    trigger={<button className="trigger-btn" />}
                    content={['Setting 2.1', 'Setting 2.2', 'Setting 2.3', 'Setting 2.4', 'Setting 2.5']}
                    onItemSelect={handleItemSelect}
                />

                <DropdownMenu
                    trigger={<button className="trigger-btn" />}
                    content={['Setting 3.1', 'Setting 3.2', 'Setting 3.3']}
                    onItemSelect={handleItemSelect}
                />
            </div>
            <div className="flex-2">
                <DropdownMenu
                    trigger={<button className="trigger-btn" />}
                    content={['Setting 4.1', 'Setting 4.2', 'Setting 4.3', 'Setting 4.4', 'Setting 4.5', 'Setting 4.6']}
                    onItemSelect={handleItemSelect}
                />

                <DropdownMenu
                    trigger={<button className="trigger-btn" />}
                    content={['Setting 5.1', 'Setting 5.2', 'Setting 5.3']}
                    onItemSelect={handleItemSelect}
                />

                <DropdownMenu
                    trigger={<button className="trigger-btn" />}
                    content={['Setting 6.1', 'Setting 6.2', 'Setting 6.3']}
                    onItemSelect={handleItemSelect}
                />
            </div>
            <div className="flex-3">
                <DropdownMenu
                    trigger={<button className="trigger-btn" />}
                    content={['Setting 7.1', 'Setting 7.2', 'Setting 7.3', 'Setting 7.4', 'Setting 7.5', 'Setting 7.6']}
                    onItemSelect={handleItemSelect}
                />

                <DropdownMenu
                    trigger={<button className="trigger-btn" />}
                    content={['Setting 8.1', 'Setting 8.2', 'Setting 8.3']}
                    onItemSelect={handleItemSelect}
                />

                <DropdownMenu
                    trigger={<button className="trigger-btn" />}
                    content={['Setting 9.1', 'Setting 9.2', 'Setting 9.3']}
                    onItemSelect={handleItemSelect}
                />
            </div>
        </div>
    )
}
