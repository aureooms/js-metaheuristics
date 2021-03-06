/**
 * Returns the mutation that improves fitness the most.
 * If this mutation does not exist, returns null.
 *
 * @param first
 */

export function best ( [ solution , best ] , walk , evaluate ) {

	let candidate = null ;

	for ( const mutation of walk( solution ) ) {

		const fitness = evaluate( solution , mutation ) ;

		if ( fitness > best ) {

			candidate = mutation ;
			best = fitness ;

		}

	}

	return [ candidate , best ] ;

}
