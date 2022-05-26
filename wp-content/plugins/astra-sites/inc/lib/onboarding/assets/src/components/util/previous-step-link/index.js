import React from 'react';
import { useStateValue } from '../../../store/store';
import { Link } from '../../../ui/style';

const PreviousStepLink = ( {
	children,
	after,
	before,
	onClick,
	customizeStep,
	disabled,
	hidden,
} ) => {
	const [ { currentIndex }, dispatch ] = useStateValue();
	const handleClick = ( event ) => {
		if ( true !== customizeStep ) {
			dispatch( {
				type: 'set',
				currentIndex: currentIndex - 1,
			} );
		}

		if ( 'function' === typeof onClick ) {
			onClick( event );
		}
	};
	return (
		<Link
			before={ before }
			after={ after }
			className={ `ist-link
				${ disabled ? 'disabled' : '' }
				${ hidden ? 'hidden-btn' : '' }
			` }
			onClick={ handleClick }
			tabIndex={ hidden ? -1 : 0 }
			onKeyPress={ handleClick }
		>
			{ before ? (
				<svg
					width="14"
					height="9"
					viewBox="0 0 14 9"
					xmlns="https://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M14.0009 4.4999C14.0009 4.36729 13.9482 4.24011 13.8544 4.14635C13.7607 4.05258 13.6335 3.9999 13.5009 3.9999H1.70789L4.85489 0.853899C4.90138 0.807411 4.93826 0.752222 4.96342 0.691483C4.98858 0.630743 5.00153 0.565643 5.00153 0.499899C5.00153 0.434155 4.98858 0.369055 4.96342 0.308316C4.93826 0.247576 4.90138 0.192387 4.85489 0.145899C4.80841 0.0994111 4.75322 0.062535 4.69248 0.0373759C4.63174 0.0122168 4.56664 -0.000732422 4.50089 -0.000732422C4.43515 -0.000732422 4.37005 0.0122168 4.30931 0.0373759C4.24857 0.062535 4.19338 0.0994111 4.14689 0.145899L0.146894 4.1459C0.100331 4.19234 0.0633877 4.24752 0.0381812 4.30827C0.0129748 4.36901 0 4.43413 0 4.4999C0 4.56567 0.0129748 4.63079 0.0381812 4.69153C0.0633877 4.75228 0.100331 4.80745 0.146894 4.8539L4.14689 8.8539C4.19338 8.90039 4.24857 8.93726 4.30931 8.96242C4.37005 8.98758 4.43515 9.00053 4.50089 9.00053C4.56664 9.00053 4.63174 8.98758 4.69248 8.96242C4.75322 8.93726 4.80841 8.90039 4.85489 8.8539C4.90138 8.80741 4.93826 8.75222 4.96342 8.69148C4.98858 8.63074 5.00153 8.56564 5.00153 8.4999C5.00153 8.43416 4.98858 8.36905 4.96342 8.30832C4.93826 8.24758 4.90138 8.19239 4.85489 8.1459L1.70789 4.9999H13.5009C13.6335 4.9999 13.7607 4.94722 13.8544 4.85345C13.9482 4.75968 14.0009 4.63251 14.0009 4.4999Z"
					/>
				</svg>
			) : (
				''
			) }
			{ children }
			{ after ? (
				<svg
					width="14"
					height="9"
					viewBox="0 0 14 9"
					xmlns="https://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0 4.50002C0 4.36741 0.0526784 4.24024 0.146447 4.14647C0.240215 4.0527 0.367392 4.00002 0.5 4.00002H12.293L9.146 0.854021C9.05211 0.760135 8.99937 0.632797 8.99937 0.500021C8.99937 0.367245 9.05211 0.239908 9.146 0.146021C9.23989 0.0521345 9.36722 -0.000610348 9.5 -0.000610352C9.63278 -0.000610355 9.76011 0.0521345 9.854 0.146021L13.854 4.14602C13.9006 4.19247 13.9375 4.24764 13.9627 4.30839C13.9879 4.36913 14.0009 4.43425 14.0009 4.50002C14.0009 4.56579 13.9879 4.63091 13.9627 4.69165C13.9375 4.7524 13.9006 4.80758 13.854 4.85402L9.854 8.85402C9.76011 8.94791 9.63278 9.00065 9.5 9.00065C9.36722 9.00065 9.23989 8.94791 9.146 8.85402C9.05211 8.76013 8.99937 8.6328 8.99937 8.50002C8.99937 8.36725 9.05211 8.23991 9.146 8.14602L12.293 5.00002H0.5C0.367392 5.00002 0.240215 4.94734 0.146447 4.85357C0.0526784 4.75981 0 4.63263 0 4.50002Z"
					/>
				</svg>
			) : (
				''
			) }
		</Link>
	);
};

export default PreviousStepLink;
