const { GraphQLScalarType, Kind } = require("graphql");

const Events = []

module.exports = {
	Date: new GraphQLScalarType({
		// @todo: Do proper time conversions.
		name: "Date",
		description: "Date custom scalar type",
		parseValue(value) {
			return new Date(value); // value from the client
		},
		serialize(value) {
			return new Date(value).getTime(); // value sent to the client
		},
		parseLiteral(ast) {
			return new Date(ast.value).getTime();
		}
    }),
    Text: new GraphQLScalarType({
		name: "Text",
		description: "Text custom scalar type",
		parseValue(value) {
			return value;
		},
		serialize(value) {
			return value;
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.STRING) {
				return ast.value;
			}
			return null;
		}
    }),
    Number: new GraphQLScalarType({
		name: "Number",
		description: "Number custom scalar type",
		parseValue(value) {
			return parseInt(value);
		},
		serialize(value) {
			return parseInt(value);
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return parseInt(ast.value, 10);
			}
			return null;
		}
    }),
    Decimal: new GraphQLScalarType({
		name: "Decimal",
		description: "Decimal custom scalar type",
		parseValue(value) {
			return parseFloat(value);
		},
		serialize(value) {
			return parseFloat(value);
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.FLOAT) {
				return parseFloat(ast.value);
			}
			return null;
		}
	}),
	TrueFalse: new GraphQLScalarType({
		name: "TrueFalse",
		description: "TrueFalse custom scalar type",
		parseValue(value) {
			return value;
		},
		serialize(value) {
			return value;
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.BOOLEAN) {
				return ast.value;
			}
			return null;
		}
    }),
};
