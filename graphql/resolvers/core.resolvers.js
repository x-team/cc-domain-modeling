const { GraphQLScalarType, Kind } = require("graphql");

module.exports = {
	DateTime: new GraphQLScalarType({
		// @todo: Do proper time conversions.
		name: "DateTime",
		description: "DateTime represented in ISO 8601 format.",
		parseValue(value) {
			return new Date(value).toISOString(); // value from the client
		},
		serialize(value) {
			return new Date(value).toISOString(); // value sent to the client
		},
		parseLiteral(ast) {
			return new Date(ast.value).toISOString();
		}
    }),
    Text: new GraphQLScalarType({
		name: "Text",
		description: "Text is a *string* of characters.",
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
		description: "Number is an *integer* number with no decimals.",
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
		description: "Decimal is a number with decimal places. (A *float*)",
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
		description: "TrueFalse is a *boolean* type that presents a state of True or False.",
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
