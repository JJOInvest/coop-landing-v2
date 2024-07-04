import cn from 'classnames';

interface Props {
    activeIndex: number;
}

const STEPS = 3;

export const Stepper = ({ activeIndex }: Props) => {
    return (
        <div className="flex items-end gap-1 my-8 mx-8">
            {Array.from({ length: STEPS }).map((_, index) => (
                <div
                    key={index}
                    className={cn([
                        'text-base text-center text-black-60 py-1.5 border-b border-grey-60 w-1/3',
                        index + 1 === activeIndex && 'border-green-120 border-b-2',
                    ])}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    );
};
