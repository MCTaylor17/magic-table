import { useState } from "react";

const ActiveColumn = () => {
  const [activeColumn, setActiveColumn] = useState(null);
  const onCellEnter = event => {
    setActiveColumn(event.target.dataset.column);
  }
  const onTableLeave = event => {
    setActiveColumn(null);
  };
  return [activeColumn, onCellEnter, onTableLeave];
};

const BorderRadius = () => {
  const [borderRadius, setBorderRadius] = useState(0);
  const onBorderRadius = event => {
    setBorderRadius(parseInt(event.target.value));
  };
  return [borderRadius, onBorderRadius];
};
const DisplayLength = () => {
  const [displayLength, setDisplayLength] = useState(9);
  const onDisplayLength = event => {
    setDisplayLength(parseInt(event.target.value));
  };
  return [displayLength, onDisplayLength];
};

const Gutters = () => {
  const [gutters, setGutters] = useState(0);
  const onGutters = event => {
    setGutters(parseInt(event.target.value));
  };
  return [gutters, onGutters];
};

const PaletteChoice = (defaultChoice) => {
  const [paletteChoice, setPaletteChoice] = useState(defaultChoice);
  const onPaletteChoice = event => {
    setPaletteChoice(event.target.value);
  };
  return [paletteChoice, onPaletteChoice]
};
  
const RowHeight = () => {
  const [rowHeight, setRowHeight] = useState(25);
  const onRowHeight = event => {
    setRowHeight(parseInt(event.target.value));
  };
  return [rowHeight, onRowHeight];
};

const TransitionTime = () => {
  const [transitionTime, setTransitionTime] = useState(5);
  const onTransitionTime = event => {
    setTransitionTime(parseInt(event.target.value));
  };
  return [transitionTime, onTransitionTime];
};

export {
  ActiveColumn,
  BorderRadius,
  DisplayLength,
  Gutters,
  PaletteChoice,
  RowHeight,
  TransitionTime,
}
