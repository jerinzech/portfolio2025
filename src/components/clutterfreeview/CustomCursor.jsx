"use client";
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorContentRef = useRef(null);

  // Ref to track if we are currently hovering a link
  const isLocked = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    // 1. General Mouse Movement
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Update cursor position globally
      if (!isLocked.current) {
        cursor.style.setProperty("--x", `${clientX}px`);
        cursor.style.setProperty("--y", `${clientY}px`);
      }

      // If we are locked on an element, handle the magnetic pull
      if (isLocked.current) {
        // We find the hovered element using the "locked-target" attribute we set later
        const target = document.querySelector(".hovered-link");
        if (target) {
          const rect = target.getBoundingClientRect();
          const halfHeight = rect.height / 2;
          const halfWidth = rect.width / 2;

          // Calculate distance from center of the button
          const topOffset = (clientY - rect.top - halfHeight) / halfHeight;
          const leftOffset = (clientX - rect.left - halfWidth) / halfWidth;

          // Move the cursor slightly
          cursor.style.setProperty("--translateX", `${leftOffset * 3}px`);
          cursor.style.setProperty("--translateY", `${topOffset * 3}px`);

          // Move the target button slightly (Magnetic effect)
          target.style.setProperty("--translateX", `${leftOffset * 6}px`);
          target.style.setProperty("--translateY", `${topOffset * 4}px`);
        }
      }
    };

    // 2. Handling Hover on Links/Buttons (The "Lock" logic)
    const onMouseOver = (e) => {
      // Check if the hovered element is an anchor <a> or button
      const target = e.target.closest("a") || e.target.closest("button");

      if (target && !isLocked.current) {
        isLocked.current = true;
        cursor.classList.add("is-locked");
        target.classList.add("hovered-link"); // Mark for the move listener

        const rect = target.getBoundingClientRect();

        // Snap cursor to the button's center and size
        cursor.style.setProperty("--x", `${rect.left + rect.width / 2}px`);
        cursor.style.setProperty("--y", `${rect.top + rect.height / 2}px`);
        cursor.style.setProperty("--width", `${rect.width}px`);
        cursor.style.setProperty("--height", `${rect.height}px`);

        target.style.setProperty("--scale", 1.05);
      }

      // Handle Paragraphs (Text hover effect)
      if (e.target.tagName === "P") {
        cursor.style.setProperty("--width", "0.2em");
        cursor.style.setProperty("--height", "1.5em");
      }
    };

    // 3. Handling Mouse Out
    const onMouseOut = (e) => {
      const target = e.target.closest("a") || e.target.closest("button");

      if (target && isLocked.current) {
        isLocked.current = false;
        cursor.classList.remove("is-locked");
        target.classList.remove("hovered-link");

        // Reset Cursor Size
        cursor.style.setProperty("--width", "24px");
        cursor.style.setProperty("--height", "24px");
        cursor.style.setProperty("--translateX", 0);
        cursor.style.setProperty("--translateY", 0);

        // Reset Target Element
        target.style.setProperty("--translateX", 0);
        target.style.setProperty("--translateY", 0);
        target.style.setProperty("--scale", 1);
      }

      if (e.target.tagName === "P") {
        cursor.style.setProperty("--width", "24px");
        cursor.style.setProperty("--height", "24px");
      }
    };

    // 4. Click Effects
    const onMouseDown = () => {
      cursor.style.setProperty("--scale", 0.9);
    };

    const onMouseUp = () => {
      cursor.style.setProperty("--scale", 1);
    };

    // Add Event Listeners
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      {/* We use Tailwind here for visual styling:
         bg-black: Black color
         rounded-full: Circle/Pill shape
         w-full h-full: Fill the container 
      */}
      <div
        ref={cursorContentRef}
        className="cursor-content bg-white rounded-[12px] w-full h-full"
      />
    </div>
  );
};

export default CustomCursor;
