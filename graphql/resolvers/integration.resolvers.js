const ScheduledServices = []
const ServiceTypes = []
const SeviceClients = []
const ServiceCareworkers = []

module.exports = {
	Query: {
		fetchServiceTypes: (_,args) => {
			const {input} = args
			return {
				serviceTypes: ServiceTypes
			};
		},
		fetchServiceClients: (_,args) => {
			const {input} = args
            return {
				clients: SeviceClients
			};
        },
		fetchServiceCareworkers: (_,args) => {
			const {input} = args
            return {
				careworkers: ServiceCareworkers
			};
		},
		fetchScheduledServices: (_,args) => {
			const {input} = args
			return ScheduledServices
		},
		fetchScheduledService: (_,args) => {
			const {input} = args
			return ScheduledServices.length > 0 ? ScheduledServices[0] : []
		}
	},
	Mutation: {
		scheduleService: (_,args) => {
			const {input} = args
			return {}
		},
		updateScheduledService: (_,args) => {
			const {input} = args
			return {}
		}
	}
};
