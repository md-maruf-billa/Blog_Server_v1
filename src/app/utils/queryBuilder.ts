import { Query } from 'mongoose';

class QueryBuilder<T> {
    public query: Record<string, any>;
    public queryModel: Query<T[], T>;

    // define conostructor
    constructor(query: Record<string, any>, queryModel: Query<T[], T>) {
        this.query = query;
        this.queryModel = queryModel;
    }

    // define searching method
    search(searchingFields: string[]) {
        if (this?.query?.search) {
            this.queryModel = this.queryModel.find({
                $or: searchingFields.map((filed) => ({
                    [filed]: { $regex: this.query.search, $options: 'i' },
                })),
            });
        }
        return this;
    }

    // define filltering method
    filter() {
        const filteringQuery = { ...this.query };
        const exludeFields = ['search', 'sortBy', 'sortOrder'];
        exludeFields.map((fld) => delete filteringQuery[fld]);
        console.log(filteringQuery)
        this.queryModel = this.queryModel.find({ _id: filteringQuery.filter });
        return this;
    }

    // define sorting method
    sort() {
        const sortOreder = this?.query?.sortOrder === 'desc' ? -1 : 1;
        const sortValue = this?.query?.sortBy || 'createdAt';
        this.queryModel = this.queryModel.sort({ [sortValue]: sortOreder });
        return this;
    }
}

// export this class
export default QueryBuilder;
