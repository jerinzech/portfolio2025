import React from 'react';

/**
 * A utility function to combine class names.
 * @param inputs The class names to combine.
 * @returns A string of combined class names.
 */
const cn = (...inputs: (string | undefined | null | false)[]) => {
  return inputs.filter(Boolean).join(' ');
};

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-white border justify-between flex flex-col space-y-4',
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold mb-2 mt-2">{title}</div>
        <div className="font-sans font-normal text-xs">{description}</div>
      </div>
    </div>
  );
};

export default function BentoGridDemo() {
  return (
    <BentoGrid className="md:grid-rows-2">
      <BentoGridItem
        title="Large Item"
        description="This item spans two columns."
        className="md:col-span-2"
      />
      <BentoGridItem
        title="Small Item 1"
        description="A regular-sized item."
      />
      <BentoGridItem
        title="Small Item 2"
        description="Another regular-sized item."
      />
      <BentoGridItem
        title="Large Item"
        description="This one also spans two columns."
        className="md:col-span-2"
      />
    </BentoGrid>
  );
}