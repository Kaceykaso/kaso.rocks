
export function Accordion({ children }) {
    return (
        <div className="accordion">
            {children}
        </div>
    );
}

export function AccordionItem({ id, title, children, isOpen = false }) {
    return (
        <div className="accordion__drawer">
            <input type="checkbox" name={`accordion-${id}`} id={`cb${id}`} defaultChecked={isOpen} />
            <label htmlFor={`cb${id}`} className="accordion__title">
                {title}
            </label>
            <div className="accordion__content">
                {children}
            </div>
        </div>
    );
}