import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import Draggable from 'react-draggable'
import { DEFAULT_PRESET_COLOR } from 'src/utils/constant'
import './index.less'

export default (props) => {
    const { color = '#000', onClose, visiable, onChange } = props
    const [selectedColor, setSelectedColor] = useState(color)

    const onChangeComplete = (e) => {
        if (onChange && typeof onChange === 'function') {
            onChange(e.hex)
        }
        setSelectedColor(e)
    }
    const handleClose = () => {
        if (onClose && typeof onClose === 'function') {
            onClose()
        }
    }
    if (!visiable) {
        return null
    }
    return (
        <Draggable cancel=".saturation-white" data-html2canvas-ignore>
            <div
                className="colorPickerContainer"
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: 190,
                }}
            >
                {/* <CloseOutlined onClick={handleClose} /> */}
                <i className="colorPickClose" onClick={handleClose}>
                    x
                </i>
                <SketchPicker
                    onChangeComplete={onChangeComplete}
                    color={selectedColor}
                    presetColors={DEFAULT_PRESET_COLOR}
                />
            </div>
        </Draggable>
    )
}
