
export function ImageGallery({ images, onImageClick }) {
    return (
        <div className="img__gallery">
            {images.map((image, index) => (
                <div className="img__gallery__image" key={index}>
                    <button
                        className="img__gallery__thumb"
                        onClick={() => onImageClick(image.fullSrc, image.alt)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            className="img__thumb"
                            src={image.thumbSrc}
                            alt={image.alt}
                        />
                    </button>
                </div>
            ))}
        </div>
    )
}