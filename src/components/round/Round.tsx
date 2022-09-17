import { ReactElement } from "react";
import { RoundSegment } from "./round-segment/RoundSegment";

export const Round = (): ReactElement => {
  return (
    <div className="round-wrapper">
      <h2 className="round-title">Round Title</h2>
      <RoundSegment />
      <RoundSegment />
    </div>
  )
}