const DetailsWidget = ({ summary, children }) => {
    return (
        <details className="rounded border-[1px] border-neutral-500 [&[open]>summary]:border-b-[1px] [&[open]>summary]:border-neutral-500">
            <summary className="py-3 px-4 text-lg font-medium text-neutral-700 hover:cursor-pointer">
                {summary}
            </summary>

            <p className="px-4 py-2 text-neutral-600">{children}</p>
        </details>
    );
};

export default DetailsWidget;
