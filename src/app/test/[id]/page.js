import React from 'react';

export default function BlogDetail({params}) {
	console.log(params);

	return <div>BlogDetail {params.id}</div>;
}
