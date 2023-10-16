package com.codemancer.ranjith.feedback.service;

import java.util.List;

import com.codemancer.ranjith.feedback.dto.request.FeedbackRequest;
import com.codemancer.ranjith.feedback.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}
