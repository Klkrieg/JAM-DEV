import { Schema, model, models } from "mongoose";

const resourceSchema = new Schema({
	number: String,
	organization: String,
	type: String,
	status: String,
	residence: String,
	city: String,
	state: String,
	birthdate: String,
	race: String,
	dependents: String,
	acceptable_use_of_funds: String,
	industry_role: String,
	years_in_industry: String,
	genre: String,
	proof_of_work: String,
	membership: String,
	proof_of_loss: String,
	primary_income: String,
	gross_annual_income: String,
	income_from_music: String,
	required_documents: String,
	covid_side_effects: String,
	healthcare_related: String,
	proof_of_emergency: String,
	crisis_type: String,
	other_requirements: String,
	notes: String,
	other_notes: String,
	url: String,
});
const Resource = models.Resource || model("Resource", resourceSchema);

export default Resource;
