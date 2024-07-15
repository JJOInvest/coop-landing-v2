import cn from 'classnames';

interface Props {
    activeIndex: number;
}

const STEPS = 3;

export const Stepper = ({ activeIndex }: Props) => {
    return (
        <div className="flex items-end gap-1 mt-8 mb-6 mx-8">
            {Array.from({ length: STEPS }).map((_, index) => (
                <div
                    key={index}
                    className={cn([
                        'text-15 leading-5 text-center text-black-60 pb-1.5 w-1/3',
                        index + 1 !== activeIndex && 'border-b border-grey-60',
                        index + 1 === activeIndex && 'border-green-120 border-b-2',
                    ])}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    );
};
